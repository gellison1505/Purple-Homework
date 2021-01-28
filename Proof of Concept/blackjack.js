function getRandomCard() {
  let mydeck = [];

  my_deck = getShuffledDeckOfCards();
  anumber = Math.floor(Math.random() * 52);
  my_face = my_deck[anumber].face;
  my_suit = my_deck[anumber].suit;

  /* populate dealer's hand */
  dealer_card_faceup = "./images/cards/"+my_face+"_of_"+my_suit+".png";
  dealer_card_facedown = "./images/cards/"+"face_down.png";
  document.getElementById("dealer_hidden").src = dealer_card_facedown;
  document.getElementById("dealer_visible").src = dealer_card_faceup;

/* populate player's hand */
  anumber = Math.floor(Math.random() * 52);
  my_face = my_deck[anumber].face;
  my_suit = my_deck[anumber].suit;
  card_one = "./images/cards/" + my_face + "_of_" + my_suit + ".png";

  anumber = Math.floor(Math.random() * 52);
  my_face = my_deck[anumber].face;
  my_suit = my_deck[anumber].suit;
  card_two = "./images/cards/" + my_face + "_of_" + my_suit + ".png";

  document.getElementById("1").src = card_one;
  document.getElementById("2").src = card_two;

  return;
}
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

