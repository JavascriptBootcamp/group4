//Answer 22

function StringUtils(){

    this.getVowels = function(str){ 
        return str.split('').filter(letter => 'aeiou'.includes(letter)).length;
    }
    this.removeChar = function(str, pos){
        return str.split('').filter(elem => str.indexOf(elem) !== pos).join('');        
    }
    this.incrementLetters = function(str){
       var ABC = {
           'a': {next: 'b'},
           'b': {next: 'c'},
           'c': {next: 'd'},
           'd': {next: 'e'},
           'e': {next: 'f'},
           'f': {next: 'g'},
           'g': {next: 'h'},
           'h': {next: 'i'},
           'i': {next: 'j'},
           'j': {next: 'k'},
           'k': {next: 'l'},
           'l': {next: 'm'},
           'm': {next: 'n'},
           'n': {next: 'o'},
           'o': {next: 'p'},
           'p': {next: 'q'},
           'q': {next: 'r'},
           'r': {next: 's'},
           's': {next: 't'},
           't': {next: 'u'},
           'u': {next: 'v'},
           'v': {next: 'w'},
           'w': {next: 'x'},
           'x': {next: 'y'},
           'y': {next: 'z'},
           'z': {next: 'a'},
           ' ': {next: ' '}
       }
      return str.split('').map(letter => letter.replace(letter,ABC[letter.toLowerCase()].next)).join('')
    }
} 

var str = new StringUtils();
console.log(str.getVowels('The quick brown fox'));
console.log(str.removeChar('The quick brown fox',2));
console.log(str.incrementLetters('The quick brown fox'));