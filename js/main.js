// function isAdult(age) {
//     // Change code below this line
//     const passed = ;

//     // Change code above this line
//     return passed;
//   }

// const userName = "Oleksii"
// const userAge = 17

// console.log(`Hello, my name is ${userName} and I'm ${userAge} yo.`)

function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}

console.log(isAdult(17));

function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  // Change code below this line
  const isMatch = password === "jqueryismyjam";

  // Change code above this line
  return isMatch;
}
console.log(isValidPassword("w1wqw"));

function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }

  return message;
}
checkAge(18);

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (available > 100) {
    message = "Not enough goods in stock!";
  } else {
    message = "Order is processed, our manager will contact you.";
  }

  // Change code above this line
  return message;
}
console.log(checkStorage(109));

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;

  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
  // Change code above this line
  return message;
}

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(500, 10, 5000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(3000, 5, 23000));

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    // Change this line
    message = "Canceled by user!";
  } else if (ADMIN_PASSWORD) {
    // Change this line
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
}
checkPassword("mangohackzor");
checkPassword("polyhax");

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

  return canAccessContent;
}

console.log(checkIfCanAccessContent("pro"));
console.log(checkIfCanAccessContent("free"));
console.log(checkIfCanAccessContent("vip"));

const userNickname = "alxkba";
const userExpierence = "few mounth";

console.log(`Hello ${userNickname}, you study ${userExpierence}`);

// Change code below this line

function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case (country = "China"):
      message = "Shipping to China will cost 100 credits";
      break;
    case (country = "Chile"):
      message = "Shipping to Chile will cost 250 credits";
      break;
    case (country = "Australia"):
      message = "Shipping to Australia will cost 170 credits";
      break;
    case (country = "Jamaica"):
      message = "Shipping to Jamaica will cost 120 credits";
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }
  // Change code above this line
  return message;
}
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("Sweden"));

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}
console.log(getNameLength("Oleksii"));

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line
console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + "...";
  }
  /// Change code above this line
  return result;
}
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 20));

function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  return result;
}
console.log(checkForName("Oleksii Kaba", "Oleksii"));

function checkForSpam(message) {
  let result;
  // Change code below this line

  if (
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale")
  ) {
    result = true;
  } else {
    result = false;
  }
  // Change code above this line
  return result;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Get best sale offers now!"));

const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}

function getExtremeElements(array) {
  // Change code below this line
  const arraySec = array[0];
  return arraySec;
  // Change code above this line
}

function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line
  string = array.join(delimiter);

  // Change code above this line
  return string;
}
console.log(
  makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
);

console.log(makeStringFromArray(["best for week"], "_"));

// function slugify(title) {
//   // Change code below this line

//   slug = title.toLowerCase().split(" ").join("-");
//   return slug;
//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));
const fruits = ["apple", "plum", "pear", "orange", "banana"];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(2, fruits.length);
console.log(nonExtremeEls);

function makeArray(firstArray, secondArray, maxLength) {
  // об'єднати два масиви в один
  const combinedArray = firstArray.concat(secondArray);
  // перевірити, чи не перевищує довжина нового масиву максимальну допустиму довжину maxLength
  if (combinedArray.length > maxLength) {
    // якщо перевищує, повернути новий масив довжиною maxLength елементів
    return combinedArray.slice(0, maxLength);
  } else {
    // якщо не перевищує, повернути повний новий масив
    return combinedArray;
  }
}
console.log(
  makeArray(["Earth", "Jupiter", "Saturn"], ["Neptune", "Uranus"], 2)
);
// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }
const start = 8;
const end = 15;
for (let i = start; i <= end; i++) {
  console.log(i);
}

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i++) {
//     total += i;
//   }
//   return total;
// }
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotal(8));
function findLongestWord(string) {
  // Розділяємо рядок на масив слів
  const words = string.split(" ");

  // Змінна для зберігання найдовшого слова
  let longestWord = "";

  // Ітеруємося по масиву слів і порівнюємо їх довжину
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord("Hi, how are u Oleksii ?"));

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line

  // Change code above this line
  return numbers;
}

// function createArrayOfNumbers(min, max) {
//   let numbers = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return numbers;
// }

// // console.log(createArrayOfNumbers(3, 10));

// function createArrayOfNumbers(min, max) {
//   let numbers = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(18, 36));

// function filterArray(numbers, value) {
//   // Change code below this line
//   let arrays = [];
//   for (let i = numbers; i > value; i++) {
//     console.log(arrays.push(i));
//   }
//   return arrays;

//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4], 3));

function getCommonElements(array1, array2) {
  // Створюємо порожній масив, в який ми будемо додавати спільні елементи
  const commonElements = [];

  // Перевіряємо кожен елемент першого масиву
  for (let i = 0; i < array1.length; i++) {
    const currentElement = array1[i];

    // Перевіряємо, чи містить другий масив поточний елемент першого масиву
    if (array2.includes(currentElement)) {
      // Якщо так, додаємо його до спільних елементів
      commonElements.push(currentElement);
    }
  }

  // Повертаємо масив спільних елементів
  return commonElements;
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  // Change code above this line
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));

const a = 3 % 1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;

      return number;
    }
  }

  // Change code above this line
}

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// function includes(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

const cars = {
  name: "BMW",
  series: 5,
  price: 25000,
  name: "Mercedes",
  series: "S-class",
  price: 30000,
  name: "Audi",
  series: "A8",
  price: 50000,
  name: "Porsche",
  series: "Taycan",
  price: 75000,
};
console.log(cars.name["BMW"]);

// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив ["premium", "promoted", "top"].

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],

//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// apartment.area = 60;
// apartment.rooms = 3;
// location:{
// country = "Jamaica";
// apartment.location.city = "Kingston";
// },
// };
// // Change code below this line

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
const location = {
  country: "Jamaica",
  city: "Kingston",
};

const myBio = {
  name: "Oleksii",
  lastName: "Kaba",
  age: 18,
  myTarget: "Front-End-Devoloper",
};
for (const key of Object.keys(myBio)) {
  console.log(`${key}: ${myBio[key]}`);
}

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",

  // Change code above this line
};

const house = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = ["descr", "rating", "price"];
const values = ["Spacious apartment in the city center", 4, 2153];
for (const key in apartment) {
  console.log(apartment[key]);
}

const aboutMe = {
  firstName: "Oleksii",
  lastName: "Kaba",
  age: "18",
  hobby: ["music", "coding"],
  location: {
    county: "Sweden",
    city: "Stockholm",
  },
};
aboutMe.hobby.push("Football");
const myLocation = aboutMe.location;
console.log(myLocation);
console.log(aboutMe);

const userName = "Oleksii";
const userAge = "18";

const userBio = {
  name: userName,
  age: userAge,
};

console.log(userBio);

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}

// function auto(carShop, orderedCar) {
//   for (const cars of carShop)
//     if (carShop.carName === orderedCar) {
//       return carShop.price * carShop.quantity;
//     }
// }
// console.log(auto(carShop, "BMW"));

// const carShop = [
//   { carName: "BMW", price: 15000, quantity: 100 },
//   { carName: "Mercedes", price: 20000, quantity: 150 },
//   { carName: "Subaru", price: 10000, quantity: 120 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }
// function getProductPrice(productName) {
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// console.log(getProductPrice("Scanner"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   for (let product of products) {
//     if (product === propName) {
//       return Object.values(product);
//     }
//   }

//   // Change code above this line
// }

// console.log(getAllPropValues("price"));

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPricee(productName) {
  // Change code below this line
  for (let product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  // Change code above this line
}

console.log(calculateTotalPricee("Grip"));

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday, today, tomorrow } = highTemperatures;

// Change code above this line

const meanTemperature = (yesterday + today + tomorrow) / 3;

const firstBook = {
  title: "Останнє королівство",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};
const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // Останнє королівство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смішної людини",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смішної людини
console.log(secondCoverImage); // https://via.placeholder.com/640/480

// const highTemperaturess = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: yestTemp,
//   today: todTemp,
//   tomorrow: tomorTemp,
//   highIcon:
//     hIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// console.log(yestTemp);

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperaturess = (highYesterday + highToday + highTomorrow) / 3;

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   // const {hex, rgb} = colors;
//   hexColors.push(colors.hex);
//   rgbColors.push(colors.rgb);
// }

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {
  today: { low: lowToday, high: highToday, icon: todayIcon },
  tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon },
} = forecast;
function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// Change code below this line
// Change code below this line
function add(...nums) {
  const numbers = nums;
  // Change code above this line
  return numbers;
}
console.log(add(1, 2, 3));

function added(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
  // Change code above this line
}

const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
  // Change code above this line
};
// const numbers = [5, 10, 15, 20, 25];
// for (let i = 0; i < numbers; i++) {}
// console.log(numbers);

// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

const carrs = ["BMW", "Volvo", "AUDI"];
for (let i = 0; i < carrs; i++) {}
console.log(carrs);

carrs.forEach((carr, index) => {
  console.log(`YOUR CAR IS ${carr}, index - ${index}`);
});

const randomWord = () => {
  console.log("Hello!");
};
randomWord();

const randomNums = (...nums) => {
  console.log(nums);
};
console.log(randomNums(1, 2, 3, 4, 4, 4, 4));

const fnA = function (firstNum, secNum, callBack) {
  const result = callBack(firstNum, secNum);

  console.log(result);
};

const fnB = function (x, y, add) {
  return x + y;
};

fnA(4, 5, fnB);

// const onGetPositionSuccess = function (position) {
//   console.log("Это вызов onGetPositionSuccess");
//   console.log(position);
//   const onGetPositionError = function (error) {
//     console.log(error);
//   };
// };
// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
// );
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Papperonni"));

function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

// Передаємо інлайн-функцію greet у якості колбека
registerGuest("Mango", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

// Передаємо інлайн-функцію notify у якості колбека
registerGuest("Poly", function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
});
// ----------------------------

function makePizzas(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

function processCall(recipient) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
    // Логіка активації автовідповідача
  } else {
    console.log(`З'єднуємо з ${recipient}, очікуйте...`);
    // Логіка прийняття дзвінка
  }
}

processCall(8);

// Необхідно написати логіку обробки замовлення піци.
//  Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
//  метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок
//  "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
//  метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     const pizza = this.pizzas.includes(pizzaName);
//     if (pizza) {
//       return onSuccess(`Your order is accepted. Cooking pizza ${pizzaName}.`);
//     } else {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      return onError(
        `There is no pizza with a name ${pizzaName} in the assortment.`
      );
    } else {
      return onSuccess(pizzaName);
    }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// повертає "Your order is accepted. Cooking pizza Four meats."
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// повертає "Error! There is no pizza with a name Big Mike in the assortment."

function calculateNums(yourNums) {
  let totalNums = 0;
  yourNums.forEach(function (num) {
    totalNums += num;
  });
  return totalNums;
}

console.log(calculateNums([164, 48, 291]));

function changeEven(numbers, value) {
  // Change code below this line
  const newArr = numbers.map((num) => {
    if (num % 2 === 0) {
      return num + value;
    } else {
      return num;
    }
  });
  return newArr;
  // Change code above this line
}

// function changeEven(numbers, value) {
//   const updatedNumbers = numbers.map((num) => {
//     if (num % 2 === 0) {
//       return num + value;
//     } else {
//       return num;
//     }
//   });
//   return updatedNumbers;
// }

console.log(changeEven([1, 2, 3, 4, 5], 10));

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort();

const getSortedFriends = (users) => {
  return users.sort((a, b) => a.friends.localeCompare(b.friends));
};
