/***
    solitairejs a javascript (ES6) library to make popular and custom solitaire games.
    Copyright (C) 2019  Wilmerben Mejia

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
***/

/***
* Deck class to be extended by deck types
*/
class Deck {
    
    /***
    * Initializes deck
    * @constructor
    */
    constructor(){
        this._cards = [];
        this._serializedCards = new Object;
    }
    
    /**
    * Adds a card to the deck by key and value 
    * @param {Object} card
    */
    push(card){
       //this._cards[card.id] = card;
       this._cards.push(card);
    }
    
    /**
    * Returns serialized cards in key(id) item (object) pair
    */
    get flush(){
        this._serializedCards = new Object;
        var deckLength = this.length -1;
        
        for(let index =0; index<= deckLength; index++){
            let card = this._cards[index];
            let id = card.id;
            this._serializedCards[id] = card;
        }
        return this._serializedCards;
    }
    
    get length(){
        return this._cards.length;
    }

    /**
    * @param {number} id 
    * @return a card by given id
    */
    getByID(id){
        var deckLength = this.length -1;
        var card;
        for(let index = 0; index <=deckLength; index ++){
            let cardInDeck = this._cards[index];
            if(cardInDeck.id == id){
                card = cardInDeck;
            }
        }
        return card;
    }

    get size(){
        var size;
        var counter =0;
        for(let card in this._cards){
            counter++;
        }
        return counter;
    }
    removeAll(){
        this._cards = [];
    }
    /**
    * Shuffle cards in the deck.
    */
    shuffle(){
        var shuffledDeck = Array.from(this._cards);
        var deckLength = this.length -1;
        var min = 1;
        var max = deckLength;
        var tempCard;
        
        /*@TODO create deck as an array first, then flush as a seriallized object */
        for(let card = 0; card <= deckLength; card ++){
            let random_index = Math.floor(Math.random() * (max - min)) + min;
            tempCard = shuffledDeck[card];
            shuffledDeck[card] = shuffledDeck[random_index];
            shuffledDeck[random_index] = tempCard;
        }
        this.removeAll();
        this._cards = Array.from(shuffledDeck);
    }
}