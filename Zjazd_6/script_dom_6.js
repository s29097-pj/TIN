// Zad_01
function addNewDiv() {
    // Tworzenie nowego diva
    var newDiv = document.createElement('div');
    newDiv.className = 'myDiv';
    newDiv.textContent = 'Nowy Div';

    // Dodanie do kontenera
    var divContainer = document.getElementById('myDivContainer');
    if (divContainer) {
        divContainer.appendChild(newDiv);
    }
}

function removeFirstDiv() {
    // Znalezienie pierwszego diva
    var firstDiv = document.querySelector('.myDiv');

    // Usunięcie, jeśli istnieje
    if (firstDiv) {
        firstDiv.remove();
    }
}

function changeColor() {
    // Znalezienie diva o klasie myDiv (wyszukiwanie wszystkich divów)
    var allDivs = document.querySelectorAll('.myDiv');

    // Znalezienie diva trzeciego (indeks 2, bo indeksowanie zaczyna się od 0)
    var divToChangeColor = allDivs[2];

    // Zmiana koloru tła
    if (divToChangeColor) {
        // Generowanie losowego koloru
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        divToChangeColor.style.backgroundColor = randomColor;
    }
}

function changeText() {
    // Znalezienie wszystkich divów
    var allDivs = document.querySelectorAll('.myDiv');

    // Zmiana tekstu we wszystkich divach
    if (allDivs) {
        allDivs.forEach(function(div) {
            div.textContent = 'Nowy tekst';
        });
    }
}

// Zad_02
function obliczWynik() {
    const pierwszaLiczbaInput = document.getElementById("liczba1");
    const drugaLiczbaInput = document.getElementById("liczba2");
    const wynikDiv = document.getElementById("wynik");
    const dzialanieSelect = document.getElementById("dzialanie");

    function walidujWartosc(wartosc) {
        if (wartosc == null || wartosc.trim() === "") {
            alert("Pole wymagane");
            return NaN;
        } else if (isNaN(wartosc)) {
            alert("To musi być liczba");
            return NaN;
        } else {
            return parseFloat(wartosc);
        }
    }

    const pierwszaWartosc = walidujWartosc(pierwszaLiczbaInput.value);
    const drugaWartosc = walidujWartosc(drugaLiczbaInput.value);
    const wybraneDzialanie = dzialanieSelect.selectedIndex;

    function wykonajOperacje(liczba1, liczba2, dzialanie) {
        switch (dzialanie) {
            case 0:
                return liczba1 + liczba2;
            case 1:
                return liczba1 - liczba2;
            case 2:
                return liczba1 * liczba2;
            case 3:
                if (liczba2 === 0) {
                    alert("Dzielenie przez 0!");
                    return NaN;
                }
                return liczba1 / liczba2;
            default:
                return NaN;
        }
    }

    wynikDiv.value = wykonajOperacje(pierwszaWartosc, drugaWartosc, wybraneDzialanie);
}

// Nasłuchiwanie na przycisku
const przyciskOblicz = document.getElementById("btn_sub");
przyciskOblicz.addEventListener('click', obliczWynik);

// Zadanie 3
// Tablica obiektów typu auto
const samochody = [
    { rok: 2018, przebieg: 50000, cena_wyjsciowa: 40000, cena_koncowa: 35000 },
    { rok: 2020, przebieg: 20000, cena_wyjsciowa: 45000, cena_koncowa: 40000 },
    { rok: 2015, przebieg: 80000, cena_wyjsciowa: 35000, cena_koncowa: 30000 }
    // Dodaj więcej obiektów według potrzeb
];

// Funkcja do generowania tabeli DOM
function generujTabele() {
    // Miejsce, gdzie tabela będzie umieszczona
    const tabelaContainer = document.getElementById('tabela-container');

    // Tworzenie elementu tabeli
    const tabela = document.createElement('table');
    tabela.border = '1';

    // Tworzenie nagłówka tabeli
    const naglowek = tabela.createTHead();
    const wierszNaglowka = naglowek.insertRow();
    for (const klucz in samochody[0]) {
        const komorkaNaglowka = wierszNaglowka.insertCell();
        komorkaNaglowka.textContent = klucz.replace('_', ' ');
    }

    // Wstawianie danych do tabeli
    for (const samochod of samochody) {
        const wiersz = tabela.insertRow();
        for (const klucz in samochod) {
            const komorka = wiersz.insertCell();
            komorka.textContent = samochod[klucz];
        }
    }

    // Umieszczenie tabeli w miejscu na stronie
    tabelaContainer.appendChild(tabela);
}

// Wywołanie funkcji generującej tabelę po załadowaniu całej strony
window.onload = generujTabele;

// Zadanie 6
// Galeria Lightbox

function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
  
var slideIndex = 1;
showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
