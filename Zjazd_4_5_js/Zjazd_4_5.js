console.log("Aby wywołać konkretną funkcję wpisz jej nazwę z odpowiednimi parametrami z zadania:")

// Funkcja sprawdza, czy podane trzy liczby tworzą trójkę pitagorejską.
function Zad_01(a, b, c) {
    // Sortujemy liczby w kolejności rosnącej
    const sortedNumbers = [a, b, c].sort((a, b) => a - b);
  
    // Sprawdzamy, czy suma kwadratów dwóch pierwszych liczb jest równa kwadratowi trzeciej
    return Math.pow(sortedNumbers[0], 2) + Math.pow(sortedNumbers[1], 2) === Math.pow(sortedNumbers[2], 2);
  }


