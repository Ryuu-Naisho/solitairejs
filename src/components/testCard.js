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
        this.failed = 0;
        this.passed = 0;
        this.testCreate();
    }
    
    testCreate(){
        const errorMsg = 'in testCreate()';
        var expected = undefined;
        var expected_id = [9,1,2,3,4,5]
        var expected_rank = [3,1,10,4,6,7]
        var expected_suite = ["clubs","hearts","clubs","spades","diamonds"]
        var actual = [];
        for (let index =0; index <= 4; index++){
            actual = new Card(
                expected_id[index],
                expected_rank[index],
                expected_suite[index]);
            console.assert(actual.id == expected_id[index],{id : actual.id});
            console.assert(actual.rank == expected_rank[index]);
            console.assert(actual.suite == expected_suite[index]);
        }
        this.passed ++;
        
        
        var expected = false;
        try{
            actual = new Card(null,null,null);
            console.assert(false);
        } catch (e){
            console.assert(true);
        }
        this.passed ++;
        
        console.log('passed : '.concat(this.passed));
    }
}