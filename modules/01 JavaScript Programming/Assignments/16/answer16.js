

var book= {
    title :"fifty shades",
     author :"shimi", 
      alreadyRead : true


}
if(book.alreadyRead=== false)
{
    process.stdout.write('You already read ');
    for( var key in book )
    {

        
        switch (key)
        {
        case "title":
        process.stdout.write(book[key]);
            //console.log(book[key]);
            break;
        case "author":
        process.stdout.write(" by " +book[key]);
        
            //console.log("by" +book[key]);
            
            break;
            default:
        
            break;

        }
    }
}
else
    {
        process.stdout.write('You still need to read ');
        
        for( var key in book )
        {
    
            
            switch (key)
            {
            case "title":
            process.stdout.write(book[key]);
                //console.log(book[key]);
                break;
            case "author":
            process.stdout.write(" by " +book[key]);
            
                //console.log("by" +book[key]);
                
                break;
                default:
            
                break;
    
            }
        }

    }



