// Zadanie 11 - Tworzenie obiektu auto
const auto = {
  rok: 0,
  przebieg: 0,
  cenaWyjsciowa: 0,
  cenaKoncowa: 0,

  // Metoda a) - Powiększa cenę wyjściową o 1000
  Zad_11_1_a: function () {
    this.cenaWyjsciowa += 1000;
    console.log(`Cena wyjściowa auta została zwiększona o 1000 i wynosi: ${this.cenaWyjsciowa}`);
  },

  // Metoda b) - Obniża cenę końcową o 1000 za każdy rok wieku auta
  Zad_11_1_b: function () {
    const obecnyRok = new Date().getFullYear();
    const wiek = obecnyRok - this.rok;
    this.cenaKoncowa -= wiek * 1000;
    console.log(`Cena końcowa auta została obniżona o ${wiek * 1000} i wynosi: ${this.cenaKoncowa}`);
  },

  // Metoda c) - Obniża cenę końcową o 10000 za każde 100000km przebiegu auta
  Zad_11_1_c: function () {
    const iloscSetekTysiecyKm = Math.floor(this.przebieg / 100000);
    this.cenaKoncowa -= iloscSetekTysiecyKm * 10000;
    console.log(`Cena końcowa auta została obniżona o ${iloscSetekTysiecyKm * 10000} i wynosi: ${this.cenaKoncowa}`);
  },

  // Metoda d) - Dopisuje do auta podany przebieg i rok
  Zad_11_1_d: function (nowyPrzebieg, nowyRok) {
    // Konwersja nowego roku na liczbę
    nowyRok = Number(nowyRok);

    this.przebieg = nowyPrzebieg;
    this.rok = nowyRok;
    this.Zad_11_1_a(); // Powiększ cenę wyjściową o 1000
    this.Zad_11_1_b(); // Obniż cenę końcową o 1000 za każdy rok wieku auta
    this.Zad_11_1_c(); // Obniż cenę końcową o 10000 za każde 100000km przebiegu auta
    console.log('Auto zaktualizowane:', this);
  }
};

// Ustawienie danych początkowych
auto.rok = 2020;
auto.przebieg = 350000;
auto.cenaWyjsciowa = 80000;
auto.cenaKoncowa = 80000;

// Console log z widocznymi danymi
console.log('Po ustawieniu początkowych danych:', auto);

// e) Funkcja, która dopisze auto do tablicy samochodow, jesli jego cena jest wieksza niz 10000.
function dodajAutoDoTablicy(auto, tablica) {
  if (auto.cenaKoncowa > 10000) {
    tablica.push(auto);
    console.log('Dodano auto do tablicy:', auto);
  } else {
    console.log('Auto nie spełnia warunku cenowego.');
  }
}

// f) Funkcja, ktora dla wszystkich aut z tablicy zwieksza rok o 1.
function zwiekszRokDlaWszystkichAut(tablica) {
  for (let i = 0; i < tablica.length; i++) {
    tablica[i].rok += 1;
  }
  console.log('Zwiększono rok dla wszystkich aut w tablicy.');
}

// Tworzenie tablicy samochodow
const samochody = [];

// Dodawanie aut do tablicy
auto.Zad_11_1_d(150000, 2019);
dodajAutoDoTablicy(auto, samochody);

auto.Zad_11_1_d(120000, 2020);
dodajAutoDoTablicy(auto, samochody);

// Wyświetlenie tablicy samochodow
console.log('Tablica samochodów:', samochody);

// Zwiększenie roku dla wszystkich aut w tablicy
zwiekszRokDlaWszystkichAut(samochody);
console.log('Tablica samochodów po zwiększeniu roku:', samochody);

// Utwórz nowe obiekty auto
const auto1 = {
  rok: 2010,
  przebieg: 150000,
  cenaWyjsciowa: 12000,
  cenaKoncowa: 12000
};

const auto2 = {
  rok: 2015,
  przebieg: 80000,
  cenaWyjsciowa: 15000,
  cenaKoncowa: 15000
};

const auto3 = {
  rok: 2018,
  przebieg: 50000,
  cenaWyjsciowa: 18000,
  cenaKoncowa: 18000
};

// Utwórz tablicę samochodów
const tablicaSamochodow = [];

// e) Funkcja, która dopisze auto do tablicy samochodow, jesli jego cena jest wieksza niz 10000.
dodajAutoDoTablicy(auto1, tablicaSamochodow);
dodajAutoDoTablicy(auto2, tablicaSamochodow);
dodajAutoDoTablicy(auto3, tablicaSamochodow);

// Wyświetl tablicę samochodów
console.log('Tablica samochodów:', tablicaSamochodow);

// f) Funkcja, ktora dla wszystkich aut z tablicy zwieksza rok o 1.
zwiekszRokDlaWszystkichAut(tablicaSamochodow);

// Wyświetl tablicę samochodów po zwiększeniu roku
console.log('Tablica samochodów po zwiększeniu roku:', tablicaSamochodow);


