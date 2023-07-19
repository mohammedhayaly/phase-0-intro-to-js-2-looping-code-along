

function writeCards(names, eventName) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return thankYouMessages;
}


function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}


const gifts = ["teddy bear", "drone", "doll"];
const event = "birthday";

const names = ["Charlie", "Samip", "Ali"];
const eventName = "birthday";

const result1 = writeCards(gifts, event);
console.log(result1);

countDown(10);

const result2 = writeCards(names, eventName);
console.log(result2);