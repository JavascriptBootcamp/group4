upCase  = 'abcdefghijklmnopqrstuvwxyz';
    LowCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    conv = {};
    for(var i=0;i<upCase.length;i++) conv[upCase[i]] = LowCase[i];
console.log(conv['c'], conv['z']   )