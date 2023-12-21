# TIN
## zadania AJAX

### Część A
Pod adresem): <http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php>
... dostępne są dane (generowane losowo kursy akcji oraz newsy giełdowe, zwracane w formie JSON).

Należy stworzyć prostą aplikację kliencką, która co jakiś czas samodzielnie połączy się asynchronicznie z powyższym adresem i wyświetli dane w DOM, na przykład w formie tabelki.
    
1. Aplikacja (HTML, CSS, JS) z miejscem na wyświetlenie danych.
2. Połączenie (jQuery.ajax / XHR / Fetch itp.) między aplikacją a serwerem (np. co 10 sekund) i zmiana wyświetlanych danych.
3. Rozpoznawanie, czy dane zmieniły się i modyfikacja DOM tylko gdy dana wartość uległa zmianie.
4. Zapamiętywanie 3 ostatnich newsów i wyświetlanie ich w formie rotatora.
5. Estetyczny styl CSS z responsywnością.
