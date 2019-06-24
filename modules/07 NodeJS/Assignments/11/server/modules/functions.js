function sortArray(arr,val){

    const mapped = arr.map((item,i)=>{
        return {index:i,value:item[val]};
    })

    mapped.sort(function( a, b ) {
        if ( a.value < b.value ){
          return -1;
        }
        if ( a.value > b.value ){
          return 1;
        }
        return 0;
      });

      return mapped.map(obj=>{
          return arr[obj.index];
      })

}


function getIndex(arr,identifyer){

    return arr.findIndex(s=>s.id===identifyer);
 
}


module.exports = {sortArray,getIndex};