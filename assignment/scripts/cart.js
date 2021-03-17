console.log('%c***** Cart Functions *****', 'color: black; background-color: green');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//- Create a global variable named `basket` and set it to an empty array.
let basket = [];

//- Create a function called `addItem`. It should:
//- take an input parameter for a string `item`
const addItem = item => {
  //- add the new item to the global array `basket`.
  basket.push(item);
  //- return `true` indicating the item was added
  let index = basket.indexOf(item);
  if (index !== -1) {
    return true;
  } else {
    return false;
  }
};

//testin addItem
console.log(`Items currently in basket: ${basket}`);
console.log(`Adding milk`, addItem('milk'));
console.log(`Items currently in basket: ${basket}`);
console.log(`Adding soda`, addItem('soda'));
console.log(`Items currently in basket: ${basket}`);
console.log(`Adding cereal`, addItem('cereal'));
console.log(`Items currently in basket: ${basket}`);


//- Create a function called `listItems`. It should:
const listItems = basketArray => {
  //- loop over the items in the `basket` array
  console.log(`%cThis basket contains the following items:`, `color: green`);
  for (let item of basketArray) {
    //- console.log each individual item on a new line
    console.log(item);
  }
  console.log(`%cend`, `color: red`);
};

//testing listItems
listItems(basket);

//- Create a function called `empty`. It should:
const empty = (inputArray) => {
  //- reset the `basket` to an empty array
  inputArray.length = 0;
};

//testing empty
empty(basket);
listItems(basket);
addItem('pizza');
addItem('fruit');
addItem('Xbox');
listItems(basket);
empty(basket);
listItems(basket);

//Streach goals
console.log('%c## Stretch Goals ##', 'color: black; background-color: orange')

//__Using functions in other functions!__

//1. Add a global `const` named `maxItems` and set it to 5.
const maxItems = 5;

//2. Create a function called isFull(). It should:
const isFull = basketArray => {
  //- return `false` if the basket contains *less* than max number of items
  if (basketArray.length < maxItems) {
    //- return `true` otherwise (equal or more than maxItems)
    return false;
  } else {
    return true;
  }
};

console.log(`Items currently in basket: ${basket}`);
console.log(`Is basket full yet: ${isFull(basket)}`);
console.log(`Adding pizza: ${addItem('pizza')}`);
console.log(`Items currently in basket: ${basket}`);
console.log(`Is basket full yet: ${isFull(basket)}`);
console.log(`Adding fruit: ${addItem('fruit')}`);
console.log(`Items currently in basket: ${basket}`);
console.log(`Is basket full yet: ${isFull(basket)}`);
console.log(`Adding Xbox: ${addItem('Xbox')}`);
console.log(`Items currently in basket: ${basket}`);
console.log(`Is basket full yet: ${isFull(basket)}`);
console.log(`Adding milk: ${addItem('milk')}`);
console.log(`Items currently in basket: ${basket}`);
console.log(`Is basket full yet: ${isFull(basket)}`);
console.log(`Adding bread: ${addItem('bread')}`);
console.log(`Items currently in basket: ${basket}`);
console.log(`Is basket full yet: ${isFull(basket)}`);


//3. Update the required `addItem` function to:
//- Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
//- If an item was added to the array, return `true`
//- If there was no room and the item could not be added return `false`





/*Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.


__Using Array built-in functions!__

4. Create a function called `removeItem`. It should:
  - Take an input parameter for a string `item`
  - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
  - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
  - Return the item removed or `null` if the item was not found

## Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!

**REMINDER:** Make sure to answer the Slack discussion question for this week!*/
