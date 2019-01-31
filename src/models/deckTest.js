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

class TestDeck{
    
    constructor(){
        var _passed = 0;
        var _failed = 0;
        
        this.passed = function(){
            _passed ++;
        }
        
        this.failed = function(){
            _failed ++;
        }
        this.testCallbacks = {'passed': this.passed, 'failed' : this.failed};
        
        this.results = function(){
            
         var _total = _passed + _failed;
         
         var output = {"Passed" : _passed, "Failed" : _failed, "Total" : _total}
         
         console.log(output);
        }
        
        this.createDeck();
        this.shuffleDeck();
        this.removeAll();
        this.results();
    }
    
    /**
    * Test 
    */
    createDeck(){
        var deck = new Deck();
        var card = new Card(1,2,"clubs");
        
        deck.push(card);
        
        assertEquals(typeof(deck.flush) == "object", this.testCallbacks, 
                     {"typeof": "".concat(typeof(deck.flush), ' is not "object"')});
        
        var expect = true;
        var actual = deck.length >0;
        assertTrue(expect == actual, this.testCallbacks, {'Error': 'Deck is empty.'});
    }
    
    shuffleDeck(){
        var deck = generateCards();
        deck.shuffle();
        var deckArray = deck.flush;
        
        for (let index in deckArray){
            let duplicates =0;
            for (let checkIndex in deckArray){
                let card = deckArray[index];
                let checkCard= deckArray[checkIndex];
                if(card.id == checkCard.id){
                    duplicates ++;
                }
            }
            if(duplicates >=2){
                assertTrue(false, this.testCallbacks, {'error' : 'duplicate found'});
                break;
            }else{
                assertTrue(true, this.testCallbacks);
            }
        }
    }
    
    removeAll(){
        var deck = generateCards();
        deck.removeAll();
        var expect = 0;
        var actual = deck.length;
        
        assertEquals(actual == expect, this.testCallbacks, {'Error':'Cards did not remove properly', 'Deck size': actual});
    }

}