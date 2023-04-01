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

function calculateTotal(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}
