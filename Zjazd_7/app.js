$(document).ready(function() {
    // Adres API, z którego pobierane są dane
    const apiUrl = 'http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php';

    // Zmienna do przechowywania ostatnich danych dotyczących kursów akcji
    let lastStockData = null;

    // Tablica przechowująca ostatnie trzy newsy
    let lastNews = [];

    // Funkcja do pobierania danych z serwera
    function fetchData() {
        $.ajax({
            url: apiUrl,
            dataType: 'json',
            success: function(data) {
                // Aktualizacja tabeli z danymi dotyczącymi kursów akcji
                updateStockTable(data.stock);

                // Aktualizacja rotatora z newsami
                updateNewsRotator(data.news);
            },
            error: function(xhr, status, error) {
                // Obsługa błędów podczas pobierania danych
                console.error('Błąd podczas pobierania danych:', error);
            }
        });
    }

    // Funkcja do aktualizacji tabeli z danymi dotyczącymi kursów akcji
    function updateStockTable(stockData) {
        // Sprawdzenie, czy dane się zmieniły
        if (!lastStockData || !isEqual(lastStockData, stockData)) {
            // Jeśli dane się zmieniły, zaktualizuj tabelę
            lastStockData = stockData;

            // Wyczyszczenie poprzednich danych w tabeli
            $('#stockTable').empty();

            // Utworzenie nagłówków tabeli
            const headers = '<tr><th>Firma</th><th>Kurs Akcji</th></tr>';
            $('#stockTable').append(headers);

            // Wypełnienie tabeli danymi dotyczącymi kursów akcji
            $.each(stockData, function(company, price) {
                const row = `<tr><td>${company}</td><td>${price}</td></tr>`;
                $('#stockTable').append(row);
            });
        }
    }

    // Funkcja do aktualizacji rotatora z newsami
    function updateNewsRotator(news) {
        // Sprawdzenie, czy news się zmienił
        if (news !== lastNews[0]) {
            // Jeśli news się zmienił, dodaj go na początek tablicy
            lastNews.unshift(news);

            // Zachowanie tylko trzech ostatnich newsów
            lastNews = lastNews.slice(0, 3);

            // Aktualizacja rotatora z newsami
            const newsRotatorItems = lastNews.map(n => `<div>${n}</div>`).join('');
            $('#newsRotator').html(newsRotatorItems);
        }
    }

    // Funkcja do porównywania dwóch obiektów
    function isEqual(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }

    // Cykliczne pobieranie danych co 10 sekund
    setInterval(fetchData, 10000);

    // Początkowe pobranie danych po załadowaniu strony
    fetchData();
});
