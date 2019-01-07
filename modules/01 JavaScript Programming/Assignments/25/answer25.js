(function () {
    let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    console.log(`Today is ${daysList[new Date().getDay()]}.`);
    console.log(`Current time is ${new Date().toLocaleTimeString()}.`);
})();
