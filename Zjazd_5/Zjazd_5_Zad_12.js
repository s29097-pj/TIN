// Zadanie 12.1
class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

// Zadanie 12.2
class Student {
    // Zadanie 12.2 i 12.3 - dodano parametr do konstruktora, aby przyjmować imię i nazwisko
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.tablicaOcen = [];
    }

    // Zadanie 12.2 - metoda zwracająca średnią ocen
    sredniaOcen() {
        if (this.tablicaOcen.length === 0) {
            return 0;
        }

        const sumaOcen = this.tablicaOcen.reduce((suma, ocena) => suma + ocena.wartosc, 0);
        return (sumaOcen / this.tablicaOcen.length).toFixed(2);
    }

    // Zadanie 12.2 - metoda wyświetlająca powitanie z imieniem, nazwiskiem i średnią ocen
    hello() {
        console.log(`Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.sredniaOcen()}.`);
    }

    // Zadanie 12.3 - setter dodający ocenę do tablicy i przeliczający średnią
    set ocena(x) {
        if (x instanceof Ocena) {
            this.tablicaOcen.push(x);
            console.log(`Dodano ocenę z przedmiotu ${x.przedmiot} o wartości ${x.wartosc}.`);
        } else {
            console.log('Podana wartość nie jest obiektem klasy Ocena.');
        }
    }

    // Zadanie 12.4 - getter zwracający informacje o ocenach w formacie tekstowym
    get oceny() {
        if (this.tablicaOcen.length === 0) {
            return 'Brak ocen.';
        }

        const ocenyInfo = this.tablicaOcen.map(ocena => `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}`).join('. ');
        return ocenyInfo + '.';
    }
}

// Przykładowe użycie
let ocena1 = new Ocena("Systemy Operacyjne", 4);
let ocena2 = new Ocena("TIN", 5);
let s = new Student("Jan", "Kowalski");

s.ocena = ocena1;
s.ocena = ocena2;
s.hello();

console.log(s.oceny);
