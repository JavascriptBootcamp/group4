

// Queue: FIFO - First In First Out
function Queue() {
    this.queueItems = [];  // Creating empty array to hold queue items

    // Returns true if items array/queue is empty
    this.isEmpty = function() {
        return this.queueItems.length === 0; 
    }

    // Adds argument into items array
    this.addToQueueEnd = function(item){
        return this.queueItems.push(item);
    }

    // If queue is not empty - Removes and returns first item of a queue 
    this.removeFromQueueBeginning = function(){
        if (!this.isEmpty())  return this.queueItems.shift();
        else return 'ERROR: The queue is empty - no items to remove';    
    }
} 


// Stack: LIFO - Last In First Out
function Stack() {

    this.stackItems = [];

    // Adds and returns item at the last stack index
    this.addToStackEnd = function(item) {
        return this.stackItems.push(item);
    }

    this.removeFromStackEnd = function() {
        // Checks if stack is empty (if its empty, there is nothing to remove or pop off)
        if (this.stackItems.length === 0) return 'ERROR: The stack is empty - no items to remove';

        var removedItem = this.stackItems.pop();

        return removedItem; // Return the removed item because calling pop() method returns the removed item 
    }
}


var queue = new Queue();
var stack = new Stack();

function isPalindrome(text) {
    var lowerCaseText = text.toLowerCase();

    for (var i = 0; i < lowerCaseText.length; i++){
        stack.addToStackEnd(lowerCaseText[i]);
        queue.addToQueueEnd(lowerCaseText[i]);
    }
    // console.log('stackItems = ', stack.stackItems);
    // console.log('queueItems = ', queue.queueItems);


    for (var i = 0; i < Math.floor(lowerCaseText.length/2); i++) {
        // console.log(`stack items at iteration ${i+1}:  ${stack.stackItems}`);
        // console.log(`queue items at iteration ${i+1}:  ${queue.queueItems}`);

        if ( queue.removeFromQueueBeginning() !== stack.removeFromStackEnd() ) {
            return `${text} (${lowerCaseText} in lower case) is not a palindrome`;
        }
            
    }
    return `${text} (${lowerCaseText} in lower case) is a palindrome`;
}

//console.log(isPalindrome("ddrrtt"));
console.log(isPalindrome("abcdCBA"));