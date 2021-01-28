// Challenge:
// Listen for a click event
// and deal a new hand of cards.



// This function will return an array
// where each element represents a 'card'
// Use the console to experiment with this function
// to discover how cards are represented in
// the array, and how you might use the card data
// to determine the filename of the corresponding
// card image file.
let getShuffledDeckOfCards = function () {
  // create a sorted deck of cards
  let faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
  let suits = ['hearts', 'spades', 'clubs', 'diamonds']

  let deck = [];
  for (const face of faces) {
    for (const suit of suits) {
      deck.push({ face: face, suit: suit });
    };
  };

  // Now shuffle the deck of cards
  let currentIndex = deck.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
  return deck;
}
