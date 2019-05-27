const promFs = require("./modules/prom-fs.js");

/* promFs.readFileIfExists('food-recipe.json')
.then(res => {
      console.log(res);
})
.catch(er => {
    console.log(er);
}) 
 */

/* async function readFileIfExitsAwait()  {
  const content = await promFs.readFileIfExists('food-recipe.json');
  console.log(content);
}

readFileIfExitsAwait();
 */

promFs.appendFilePromise("food-recipe.json", "content appended to file!!").then(res => {
  console.log(res);
});

async function appedFileByAsync(){
    const status = await promFs.appendFilePromise("food-recipe.json", "content appended to file!!");
    console.log(status);
}
appedFileByAsync();