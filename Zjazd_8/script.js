// Czekaj, aż dokument HTML zostanie całkowicie załadowany
$(document).ready(function() {
    // Pobieranie listy albumów za pomocą API
    $.getJSON("https://jsonplaceholder.typicode.com/albums", function(albums) {
      // Iterowanie przez każdy album w liście
      $.each(albums, function(i, album) {
        // Dodawanie miniatury albumu do galerii
        $(".gallery").append("<a href='#' data-album-id='" + album.id + "'><img src='https://picsum.photos/200?random=" + album.id + "' alt='" + album.title + "'></a>");
      });
  
      // Obsługa kliknięcia na miniaturę albumu
      $(".gallery a").click(function(e) {
        e.preventDefault();
  
        // Pobieranie ID albumu z atrybutu data
        var albumId = $(this).data("album-id");
  
        // Pobieranie listy zdjęć z wybranego albumu za pomocą API
        $.getJSON("https://jsonplaceholder.typicode.com/photos?albumId=" + albumId, function(photos) {
          // Usuwanie istniejących elementów z galerii
          $(".gallery").empty();
  
          // Iterowanie przez każde zdjęcie w liście
          $.each(photos, function(i, photo) {
            // Dodawanie zdjęcia do galerii wraz z linkiem do pełnej wersji
            $(".gallery").append("<a href='" + photo.url + "' data-lightbox='gallery'><img src='" + photo.thumbnailUrl + "'></a>");
          });
  
          // Konfiguracja i uruchomienie Lightbox po dodaniu zdjęć do galerii
          lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
          });
        });
      });
    });
  });
  