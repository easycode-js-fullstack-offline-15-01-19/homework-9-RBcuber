
// 1. Создать конструктор для производства автомобилей.
// Конструктор должен принимать марку автомобиля и возраст машины.
// Конструктор должен иметь метод, который возвращает марку,
// и второй метод, который возвращает год производства машины 
// (год текущий минус возраст машины, использовать Date для получения текущего года)

class Car {
    constructor(mark, year) {
        this.mark = mark;
        this.year = year;
    }
    returnMark() {
        return this.mark[0].toUpperCase() + this.mark.slice(1);
    }
    
    returnYear() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }

}

const lexus = new Car('lexus', 22);
const bmw = new Car('bmw', 10);


// 2. Написать конструктор, который умеет элементарно шифровать строки 
// (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением,
// или любой другой метод). Конструктор при инициализации получает строку и имеет следующие методы:



function Coding(str) {
    this.originalStr = function() {
        return str;
    }
    this.codingStr = function() {
        codingString = ''
        for (let i = 0; i < str.length; i++) {
        if (!(i === str.length - 1)) {
            codingString += str.charCodeAt(i) + ' ';
        }
        else { 
            codingString += str.charCodeAt(i)
        }
    }
       return codingString.split("").reverse().join("");
    }
}

const string = new Coding('qwerty');
const string2 = new Coding('Hello World');


// 1 Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):



class Component {
    constructor(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
  }
}
  
  const comp = new Component('span');
  
  // 2 Реализовать конструктор и методы в ES6 синтаксисе:
 
class Component2 {
    constructor(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
  }
  setText(text) {
    this.node.textContent = text;
  }
}
const comp2 = new Component2('span');

// 3. Создать класс калькулятора который будет принимать стартовое значение
// и у него будут методы сложить, вычесть, умножить , разделить.
// Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.


class calculator {
    constructor(res) {
        this.res = res 
    }
    plus(num) {
        this.res += num;
        return this.res
    }
    minus(num) {
        this.res -= num;
        return this.res
    }
    multiply(num) {
        this.res *= num;
        return this.res
    }
    split(num) {
        this.res /= num;
        this.res = parseFloat(this.res.toFixed(2)); 
        return this.res
    }
    set() {
        return this.res;
    }
    get(res) {
        return this.res = res
    }
}

const number1 = new calculator(12);
const number2 = new calculator(45);

// 1.Написать функцию, которая принимает год, а возвращает день 1го
// января этого года. День должен быть в русском формате (например, для 2016 это будет “пятница”)

function days(year) {
    const myDate = new Date(year, 0, 1);    
    console.log(myDate.toLocaleString('ru', {weekday: 'short'}) ); // 'Пт'
}

// 2. Написать функцию, которая принимает дату в виде строки
// “29.03.1985”, а возвращает день в русском формате (например, для
// указанной даты это будет “пятница”). Известно, что формат даты в
// строке всегда “дд.мм.гггг”.


function days2(strData) {
    date = strData.split('.');
    const myDate = new Date(+date[2], (+date[1] - 1), +date[0]);
    console.log(myDate.toLocaleString('ru', {weekday: 'short'}) ); // 'Пт'   
}


// 3. Узнать, сколько прошло полных недель с начала года (1го января 2016г.) до сегодняшней даты

function weeks() {
	const now = Date.now(),
		date = new Date(2016, 0, 1),
		milisec = now - Date.parse(date);

	return Math.floor(milisec / (1000 * 60 * 60 * 24 * 7));
}
