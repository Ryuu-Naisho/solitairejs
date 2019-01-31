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

/** Class representing a card */
class Card{
    /**
    * Create a Card object 
    * @constructor
    * @param {int} id - id of the card.
    * @param {int} rank - rank of the card.
    * @param {string} suite - suite of the card.
    */
    constructor (id, rank, suite){
        if (!id || !rank || !suite)
                return ;
        const _id = id;
        const _rank = rank;
        const _suite = suite;
        
        this.getID = function(){return _id;}
        this.getRank = function(){return _rank;}
        this.getSuite = function(){return _suite;}
    }
    /**
    * Get the card id
    * @return {number} id
    */
    get id() {
        return this.getID();
    }
    
    /**
    * Get the card rank.
    * @return {number} rank
    */
    get rank() {
        return this.getRank();
    } 
    
    /**
    * Get the card suite.
    * @return {string} suite
    */
    get suite() {
        return this.getSuite();
    }
    
    /**
    * Get the pile number of the given deck. i.e Tableau has seven piles.
    * @return {number} pile
    */
    get deckPile() {
        return this._deckPile;
    }
    /**
    * Set which pile of a deck, the card will be in. 
    */
    set  deckPile(value) {
        this._dekcPile = value;
    }
    
    /**
    * Get the deck of which the card is in. 
    * @return {string} deck
    */
    get deck(){
        return this._deck;
    }
    /**
    * Set the name of the deck, which the card will be in.
    */
    set deck(value) {
        this._deck = value;
    }
}
