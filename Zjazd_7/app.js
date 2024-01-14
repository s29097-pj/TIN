$(document).ready(function() {
    // Adres API, z którego pobierane są dane
    const apiUrl = 'http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php';

    // Funkcja do pobierania danych z serwera
    function fetchData() {
        $.ajax({
            url: apiUrl,
            dataType: 'json',
            success: function(data) {
                // Aktualizacja danych w tabeli
                updateStockTable(data.stock);

                // Aktualizacja rotatora z newsami
                updateNewsRotator(data.news);
            },
            error: function(xhr, status, error) {
                // Obsługa błędów podczas pobierania danych
                console.error('Błąd podczas pobierania danych:', error);

                // Dostęp do xhr i status w przypadku błędu
                console.log('XHR:', xhr);
                console.log('Status:', status);
            }
        });
    }

    // Funkcja do aktualizacji danych w tabeli
    function updateStockTable(stockData) {
        $.each(stockData, function(company, price) {
            // Aktualizacja tylko komórek z danymi dla odpowiednich firm
            $(`#${company}Price`).text(price);
        });
    }

    // Funkcja do aktualizacji rotatora z newsami
    function updateNewsRotator(news) {
        // Aktualizacja rotatora z newsami
        $('#newsRotator').html(`<div>${news}</div>`);
    }

    // Cykliczne pobieranie danych co 10 sekund
    setInterval(fetchData, 10000);

    // Początkowe pobranie danych po załadowaniu strony
    fetchData();
});
