// Function 1

// Resolve when sum of two numbers is greater than 10

const sum = function (a, b) {
  const sumPromise = new Promise((resolve, reject) => {
    const sumOfTwo = a + b;

    if (sumOfTwo > 10) {
      resolve("Resolved");
    } else {
      reject(new Error("Less than 10"));
    }
  });

  return sumPromise;
};

// Function 2

// Promise based Set Timeout function

const timer = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

// Function 3

// Roll Dice

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const rollDice = function () {
  const diceRoll = new Promise((resolve, reject) => {
    let roll = randomNumber(1, 6);

    if (roll === 6) {
      resolve("Win");
    } else {
      reject(new Error("Loss"));
    }
  });

  return diceRoll;
};
