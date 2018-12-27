
function evenWords(str){
    return str.split(' ').filter((elem,index) => (index+1) % 2 === 0).join(' ');
}

