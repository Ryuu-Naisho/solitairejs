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

/**
* Returns a deck with card objects.
* @param {Object} customSuites (optional)
* @Param {Object} customRanks {optional}
*/

function generateCards(customSuites = false, customRanks = false){
    
    var totalSuites;
    var totalRanks;
    var genSuites;
    var genRanks;
    var deck = new Deck();
    var card ;
    var idCount =1;
    var id = '_1';
    
    if(customSuites){
       genSuites = customSuites;
       totalSuites = customSuites.length;
    }else{
        genSuites = suites;
        totalSuites = suites.length;
    }
    if(customRanks){
        genRanks = customRanks;
        totalRanks = customRanks.length;
    }else{
        genRanks = ranks;
        totalRanks = ranks.length;
    }

    for(let suite in genSuites){
        for (let rank in genRanks){
          card = new Card(id, genRanks[rank], genSuites[suite])
          deck.push(card);
          idCount ++;
          id = ''.concat('_',idCount);
        }
    }
    
    return deck;
}