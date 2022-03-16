/* https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascriptv

Define a card suit

You get any card as an argument. Your task is to return a suit of this card.
Our deck (is preloaded) 
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'*/

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

function defineSuit(card) {
    if(card.includes('♣')){
      return 'clubs'}
    if(card.includes('♦')){
      return 'diamonds'}
    if(card.includes('♥')){
      return 'hearts'}
    if(card.includes('♠')){
      return 'spades'}
  } 

  /* https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
  
  Create a function that takes 2 integers in form of a string as an input, and 
  outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)*/
const a = prompt("primer numero")
const b = prompt("segundo numero")

function sumStr(a,b) {
    const number1 = Number(a)
    const number2 = Number(b)
    const result = String(number1 + number2)
    return result
  }
  console.log(sumStr(a,b));

  /* https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript */

  /* Given a month as an integer from 1 to 12, return to which quarter of the 
  year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), 
is part of the second quarter; and month 11 (November), is part of the fourth 
quarter.
 */

  const quarterOf = (month) => {
    if(month <= 3){
      return 1
    }
    if(month <= 6 && month > 3){
      return 2
    }
    if(month <= 9 && month > 6){
      return 3
    }
    if(month <= 12 && month > 9){
      return 4
    }
  }

  /* https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript */

  /* Your function takes two arguments:

    current father's age (years)
    current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how 
  many years he will be twice as old).
 */

  function twiceAsOld(dadYearsOld, sonYearsOld) {
    let sonYearsOldx2 = sonYearsOld*2
    if(dadYearsOld > sonYearsOldx2){
       return dadYearsOld - sonYearsOldx2
    } else {
       return sonYearsOldx2 - dadYearsOld
    }
  }