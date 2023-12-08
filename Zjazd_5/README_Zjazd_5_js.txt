## Technologie Internetu

## Zadania JavaScript

### Część B

#### 11.
Dany jest Obiekt:
auto{rok, przebieg, cena_wyjsciowa, cena_koncowa}.

#### 11.1
Napisz następujące metody w obiekcie:
- a) Metoda, która powiększa cenę wyjściową o 1000.
- b) Metoda, która obniża cenę końcową o 1000 za każdy rok wieku auta (względem ceny wyjściowej).
- c) Metoda, która obniża cenę końcową o 10000 za każde 100000km przebiegu auta.
- d) Metoda, która dopisuje do auta podany przebieg i rok (automatycznie przeliczając cenę wg powyższych funkcji).

#### 11.2
Stwórz tablicę obiektów typu auto oraz funkcje do niej:
- e) Funkcja, która dopisze auto do tablicy samochodow, jesli jego cena jest wieksza niz 10000.
f) Funkcja, ktora dla wszystkich aut z tablicy zwieksza rok o 1.

#### 12.
Student i Ocena: klasy w ECMA6.

#### 12.1
Stwórz klasę Ocena z konstruktorem. Ma mieć 2 pola:
- przedmiot: nazwa przedmiotu,
- wartosc: wartość liczbowa oceny.

#### 12.2
Stwórz klasę Student, zawierającą:
- tablicę ocen,
- pole na średnią ocen,
- konstruktor (parametry, imię i nazwisko),
- metodę hello, zwracającą komunikat powitalny z imieniem, nazwiskiem i aktualną średnią ocen.

> let s = new Student(‘Jan’, ‘Kowalski’);
> console.log(s.hello());
```
Witaj Jan Kowalski, Twoja średnia ocen to: 0.
```

#### 12.3
Do klasy Student dodaj setter oceny(x). Jeśli x jest obiektem klasy Ocena, ma zostać dopisany do tablicy ocen. Równocześnie ma zostać przeliczona średnia ocen.

#### 12.4
Do klasy Student dodaj getter oceny(). Powinien zwrócić aktualne oceny studenta, dodane przy pomocy settera, w komunikacie tekstowym, w formacie jak powyżej.

> console.log(s.oceny);
```
Przedmiot: WPR - ocena 4. Przedmiot: TIN - ocena 3. Przedmiot:
POJ - ocena 2.
```