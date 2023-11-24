console.log("Aby wywołać konkretną funkcję wpisz jej nazwę z odpowiednimi parametrami z zadania:")

// Funkcja sprawdza, czy podane trzy liczby tworzą trójkę pitagorejską.
function Zad_01(a, b, c) {
  // Sortujemy liczby w kolejności rosnącej
  const sortedNumbers = [a, b, c].sort((a, b) => a - b);
  
  // Sprawdzamy, czy suma kwadratów dwóch pierwszych liczb jest równa kwadratowi trzeciej
  return Math.pow(sortedNumbers[0], 2) + Math.pow(sortedNumbers[1], 2) === Math.pow(sortedNumbers[2], 2);
}

// Funkcja wypisująca wszystkie liczby z przedziału a-b, podzielne przez c.
function Zad_02(a, b, c) {
  for (let i = a; i <= b; i++) {
    if (i % c === 0) {
      console.log(i);
    }
  }
}

// Funkcja wypisującą w konsoli tabliczkę mnożenia o boku podanym jako parametr.
function Zad_03(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      row += i * j + ' ';
    }
    console.log(row);
  }
}

// Funkcja wypisującą w konsoli ciąg Fibonacciego o długości podanej jako parametr.
function Zad_04(n) {
  let a = 0, b = 1, c;
  let sequence = [a, b];
  for (let i = 2; i < n; i++) {
    c = a + b;
    sequence.push(c);
    a = b;
    b = c;
  }
  console.log(sequence);
}

// Funkcja rysującą „choinkę nocą” o podanej wysokości
function Zad_05(height) {
  let width = height * 2 - 1;
  let tree = '';
  for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j < width; j++) {
      if (j < height - i - 1 || j > height + i - 1) {
        row += ' ';
      } else {
        row += '*';
      }
    }
    tree += row + '\n';
  }
  console.log(tree);
}

/* Napisz funkcję rysującą „choinkę nocą” o podanej wysokości (szerokość jest tu nieco większa niż wysokość).
  > choinkaNoca(6);
************
*****  *****
****    ****
***      ***
**        **
*          * */
function Zad_06(height) {
  if (height == undefined) {
    console.log("Brak argumentu");
    return;
  }
  
  let result = "";
  
  for (let i = height; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    for (let k = 0; k < 2 * (height - i); k++) {
      result += " ";
    }
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    result += "\n";
  }
  
  console.log(result);
}
  

// Funkcja licząca pole wybranej figury 
// (prostokąt, trapez, równoległobok, trójkąt) z wykorzystaniem instrukcji switch.
function Zad_07(shape, ...args) {
  switch (shape) {
    case 'rectangle':
      return calculateRectangleArea(...args);
    case 'trapezoid':
      return calculateTrapezoidArea(...args);
    case 'parallelogram':
      return calculateParallelogramArea(...args);
    case 'triangle':
      return calculateTriangleArea(...args);
    default:
      return 'Invalid shape';
  }
}

function calculateRectangleArea(width, height) {
  return width * height;
}

function calculateTrapezoidArea(base1, base2, height) {
  return ((base1 + base2) / 2) * height;
}

function calculateParallelogramArea(base, height) {
  return base * height;
}

function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

// Funkcja liczącą pole wybranej figury (prostokąt, trapez, równoległobok, trójkąt) 
// bez użycia instrukcji warunkowej (bez if, switch, pętli). 
// Wykorzystałem funkcje anonimowe i callback.
const Zad_08 = (shape, ...args) => {
  const areaFunctions = {
    rectangle: (width, height) => width * height,
    trapezoid: (base1, base2, height) => ((base1 + base2) / 2) * height,
    parallelogram: (base, height) => base * height,
    triangle: (base, height) => (base * height) / 2,
  };
  return areaFunctions[shape];
};

// Funkcja wypisująca w konsoli trójkąt Pascala o wysokości podanej jako parametr.
function Zad_09(height) {
  let triangle = [];
  for (let i = 0; i < height; i++) {
    triangle[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }
  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < height - i - 1; j++) {
      row += "  ";
    }
    for (let k = 0; k <= i; k++) {
      row += `${triangle[i][k]}`.padStart(6, " ");
    }
    console.log(row);
  }
}

// Funkcja cenzurująca słowa
function Zad_10(niedozwolone_slowa, zdanie) {
  let cenzura = "";
  for (let i = 0; i < niedozwolone_slowa.length; i++) {
    let regex = new RegExp(niedozwolone_slowa[i], "gi");
    zdanie = zdanie.replace(regex, "*".repeat(niedozwolone_slowa[i].length));
  }
  return zdanie;
}
