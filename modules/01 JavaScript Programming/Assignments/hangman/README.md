# Task: Hangman
## Intro
Implement the "Hangman" game in javascript, to be run in node.
In this game, the computer pick a phrase in random and the player needs to find it by picking one letter at a time.
If the player picks a letter that is not in the selected phrase, she loses one life.
If the player finds the phrase before losing all life, she wins.

## Flow
The flow of the game is as follows:
1. Set life = 10
2. Pick a phrase in random
3. While life > 0 && not won, do:  
    1. Show remaining life  
    2. Show current found matches  
    3. Get new letter from user  
    4. If new letter not in phrase => reduce 1 life
4. If life === 0 show "You lost!"
    1. Else show "you won!"

## Hints
Here are some functions that can help you implement the game

### function getFindsStr(phrase, letters)
Example: 
```javascript
const phrase = 'Foo bar baz';
const letters = ['a', 'f'];
const finds = getFindsStr(phrase, letters);
console.log(finds);
// print: f__ _a_ _a_
```

### function isInPhrase(phrase, letter)
Example
```javascript
const phrase = 'Foo bar baz';
console.log(isInPhrase(phrase, 'b'); // true
console.log(isInPhrase(phrase, 'x'); // false
```


### function isWon(phrase, letters)
Example: 
```javascript
const phrase = 'abc aa bb ab';
const letters = ['a', 'b', 'c'];
console.log(isWon(phrase, letters)); // true
console.log(isWon('xyza', letters)); // false
```

### function runGame(phrases)
Will implement the flow as described above
