// Funkcja do załadowania początkowego stylu
function loadStyles() {
    document.getElementById('style_2').disabled = false; // Aktywujemy domyślny styl
    document.getElementById('style_3').disabled = true; // Wyłączamy inny styl
}

// Funkcja do obsługi zmiany wybranego stylu
function zmien(o) {
    if (o.selectedIndex === 0) {
        document.getElementById('style_2').disabled = false; // Aktywujemy styl_2.css
        document.getElementById('style_3').disabled = true; // Wyłączamy styl_3.css
    } else if (o.selectedIndex === 1) {
        document.getElementById('style_2').disabled = true; // Wyłączamy styl_2.css
        document.getElementById('style_3').disabled = false; // Aktywujemy styl_3.css
    } else {
        document.getElementById('style_2').disabled = true; // Wyłącz oba style
        document.getElementById('style_3').disabled = true;
    }
}

// JavaScript dla obsługi kliknięć na link 1
document.addEventListener('DOMContentLoaded', function() {
    var link1 = document.querySelector('.nav1 > li');
    link1.addEventListener('click', function() {
        var subLinks = document.querySelector('.nav1 .sub-links');
        subLinks.style.display = subLinks.style.display === 'block' ? 'none' : 'block';
    });
});

