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
  const passed = (age >= 18);
  

  // Change code above this line
  return passed;
}

console.log(isAdult(17))

function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Change code below this line
    const isMatch = (password === 'jqueryismyjam') ;
  
    // Change code above this line
    return isMatch;
  }
  console.log(isValidPassword('w1wqw'))


  function checkAge(age) {
    let message;
  
    if (age >= 18) { // Change this line 
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
  
    return message;
  }
  checkAge(18)


  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    if(available > 100){
      message = "Not enough goods in stock!";
      
    } 
    else{
      message = "Order is processed, our manager will contact you.";
    }
  
    // Change code above this line
    return message;
  }
  console.log(checkStorage(109))
  
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
    const totalPrice = (pricePerDroid * orderedQuantity);
    
    if(totalPrice > customerCredits){
      message = "Insufficient funds!";
    }
    else{
      message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
    }
    // Change code above this line
    return message;
  }
  
  console.log(makeTransaction(3000, 5, 23000))
  console.log(makeTransaction(500, 10, 5000))
  console.log(makeTransaction(1000, 3, 15000))
  console.log(makeTransaction(3000, 5, 23000))

  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password === null) { // Change this line
      message =  'Canceled by user!';
    } else if (ADMIN_PASSWORD) { // Change this line
      message = 'Welcome!';
    } else {
      message = 'Access denied, wrong password!';
    }
  
    return message;
  }
  checkPassword('mangohackzor')
  checkPassword('polyhax')
 

const age = 17;
console.log(age > 16 && age < 18);


