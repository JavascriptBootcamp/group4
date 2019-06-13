self.addEventListener("message", function (e) {
    let val = 1.0
    for (let i = e.data; i > 0; i--) {
        val *= 0.9;
    }
    self.postMessage(val); 
}); 

console.log('Hello from worker!');