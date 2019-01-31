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

class testCard{
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
        
        this.results();
    }
    
    testCreate(){
        
        const errorMsg = 'in testCreate()';
        var expected = undefined;
        var expected_id = [0,1,2,3,4,5]
        var expected_rank = [3,1,10,4,6,7]
        var expected_suite = ["clubs","hearts","clubs","spades","diamonds"]
        var actual = [] ;
        var card = new Card(1,2,'hearts');
        for (let index =0; index <= 4; index++){
        card = new Card(expected_id[index],expected_rank[index],expected_suite[index])
        actual= card;
        console.log(actual.id);
        }
        console.log(actual.id);
    }
}