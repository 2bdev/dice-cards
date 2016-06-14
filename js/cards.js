function Card(rank, suit) {
	this.rank = rank;
	this.suit = suit;
}

function Deck() {
	this.deck = new Array();
}

Deck.prototype = {

	makeDeck: function() {
		var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
    var suits = new Array("Clubs", "Diamonds", "Hears", "Spades");

    this.deck = new Array(52);

    var i, j;
    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < ranks.length; j++) {
           this.deck.push(new Card(ranks[j], suits[i]));
        }
    }
	},

	shuffle: function() {
		var i, n, j, temp;
    for (i = 0; i < n; i++) {
      for (j = 0; j < this.deck.length; j++) {
        k = Math.floor(Math.random() * this.deck.length);
        temp = this.deck[j];
        this.deck[j] = this.deck[k];
        this.deck[k] = temp;
      }
    }
	}, 

	drawCard: function() {
		if (this.deck.length > 0) {
      return this.deck.pop();
    }
    else return false;
	},


}