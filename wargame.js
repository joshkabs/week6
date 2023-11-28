const suits = ['H','C','D','S']; // An array of suits (H: Hearts, C: Clubs, D: Diamonds, S: Spades).
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']; // An array of card values (2 to 10, and the face cards J, Q, K, A).

// this A class for of cards.
class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length
    }
//Shuffle  Method 
    shuffle() {
        for(let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}
// A class for a suit and value.
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}
//A function for suits and values.
function freshDeck() {
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value)
        })
    })
}
// this Function starts the game with a new shuffled deck.
function startNewGame() {
    const myDeck = new Deck();
    myDeck.shuffle();
    return myDeck; 
}
// Create a new game deck and display its cards.
const gameDeck = startNewGame();
console.log(gameDeck.cards);

// Function to distribute cards to players and reset the game.

const player1 = []; // Declare player1 outside the function
const player2 = []; // Declare player2 outside the function

const numberOfCardsPerPlayer = gameDeck.numberOfCards / 2; // Determine the number of cards per player.
// Distribute cards to player1.
for (let i = 0; i < numberOfCardsPerPlayer; i++) {
  player1.push(gameDeck.cards.pop());
}

// Distribute cards to player2.
for (let i = 0; i < numberOfCardsPerPlayer; i++) {
  player2.push(gameDeck.cards.pop());
}

console.log(player1);
console.log(player2);
// Initialize player scores.
let player1Score = 0;
let player2Score = 0;
// Initialize the number of turns and the maximum number of turns.
let numberOfTurns = 0;
const maxTurns = 26;
// Game loop that continues until a player wins or max turns are reached.
while(player1.length > 0 && player2.length > 0 && numberOfTurns < maxTurns) {
    // Each player plays a card.
    const card1 = player1.pop();
    const card2 = player2.pop();
    // Compare the values of the played cards to determine the round winner.
    if(card1.value > card2.value) {
        console.log('Player 1 wins the round!');
        player1.push(card1, card2);
        player1Score++;
    }else if(card1.value < card2.value) {
        console.log('Player 2 wins the round!');
        player2.push(card1, card2);
        player2Score++;
    }else {
        console.log('game is tied!');
    }
    // Increment the number of turns.
    numberOfTurns++;
}

// tells us who win/loses and when it's tied.

console.log(`Player 1's Score: ${player1Score}`);
console.log(`Player 2's Score: ${player2Score}`);
if(player1Score > player2Score){
    console.log('Player 1 wins!');
}else if(player1Score < player2Score){
    console.log('Player 2 wins!');
}else {
    console.log('the game is tied!');
}