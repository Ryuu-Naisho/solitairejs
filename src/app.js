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

class Solitairejs {
    
    constructor(){
        /* Create import class */
    const module = {
        'card' : 'solitairejs/models/Card.js',
        'cardTest' : 'solitairejs/models/cardTest.js',
        'deck' : 'solitairejs/models/Deck.js',
        'deckTest' : 'solitairejs/models/deckTest.js',
        'cardScheme' : 'solitairejs/models/cardScheme.js',
        'cardGenerator' : 'solitairejs/controllers/cardGenerator.js',
        'assert' : 'solitairejs/utils/assertions/assert.js'};
    
    for(let uri in module){
        this.imports(module[uri]);
    }

    }
    
    imports(uri){
        var script = document.createElement('script');
        script.src = uri;
        document.head.appendChild(script);
    }

}

solitairejs = new Solitairejs();