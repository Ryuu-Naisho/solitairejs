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

const ranks = {
    0 : 'Ace',
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
    10 : 10,
    11 : 'Jack',
    12 : 'Queen',
    13 : 'King'
}

const suites = {
    0 : 'Spades',
    1 : 'Clubs',
    2 : 'Hearts',
    3 : 'Diamonds'
}