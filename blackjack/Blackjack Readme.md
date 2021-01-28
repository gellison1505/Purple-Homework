# Homework (Blackjack)

## points

DUE: 

For easiest viewing of these instructions, view online or use a Markdown previewer.

Instructions

This assignment builds on `Deal a Deck of Cards`. If you didn't do that assignment, you can refer to [folder info here] for hints on how to deal and randomize the card deck. You will use Javascript, jQuery, and HTML to simulate the game of blackjack. Watch [How to Play Blackjack](`https://www.youtube.com/watch?v=eyoh-Ku9TCI`) to familiarize yourself with the basic rules. Note that your challenge doesn't involve wagering or chips. Also, it is a single player game.

Instructions

Review `blackjack.pdf.`The blackjack application simulates the actions of dealer and player. Make the game functional by adding the missing code:

* implement hit button: Each time `Hit` is clicked, the player should receive a new, randomly selected card. Look at the ID in the HTML file and notice that the cards should be displayed in order, from 1 up to 9 cards total.
* implement stay button: The stay button should prevent the player from drawing another card. After clicking stay, your program should reveal the dealer's face-down card. If the value of the dealer's cards totals 16 or less, the program should pause and deal an additional card. Repeat this process until the dealer's hand total 17 or higher. 
* implement win and bust: A player wins by collecting cards that come closer than the dealers hand to 21, but not over.  Use the styles in the css section to create a banner for a win and one for a bust.

