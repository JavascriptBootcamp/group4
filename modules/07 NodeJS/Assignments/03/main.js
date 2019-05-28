const promFs = require("./modules/prom-fs.js");

const path = "food-recipe.json";
const content1 = '{"name":"aviyot"}';
const content2 = '{"backend":"nodejs"}';
const path2 = "food-recipe-copy.json";
const path3 = "file.txt";

/* promFs.readFileIfExists('food-recipe.json')
.then(res => {
      console.log(res);
})
.catch(er => {
    console.log(er);
}) 
 */

async function readFileIfExitsAwait()  {
  try {
  const content = await promFs.readFileIfExists('food-recipe.json');
  console.log(content);
  }
  catch(er) {
    console.log(er);
  }
}

readFileIfExitsAwait();


 promFs
  .appendFilePromise("food-recipe.json", "content appended to file!!")
  .then(res => {
    console.log(res);
  }).catch(er => console.log(er)); 

async function appedFileByAsync() {
  try {
  const status = await promFs.appendFilePromise(
    "food-recipe.json",
    "content appended to file!!"
  );
  console.log(status);
  }
  catch (er) {
    console.log(er);
  }
}
appedFileByAsync();


 
promFs.readFilePromise(path)
 .then((fileContent) => {
   console.log(fileContent);
 }).catch(er=>console.log(er));

async function readFileAsnc(){

  try {
const fileContent = await  promFs.readFilePromise(path);
console.log(fileContent);
  }
  catch(er) {
    console.log(er);
  }
}

readFileAsnc(); 


promFs.writeFilePromise(path2,content1)
.then((isWriteToFile)=>{
  console.log(isWriteToFile);
}).catch(er=> console.log(er));

async function writeFileAsync(){
  try {
  const isWriteToFile = await promFs.writeFilePromise(path2,content2);
  console.log(isWriteToFile);
  }
  catch(er){
    console.log(er);
  }
}

writeFileAsync(); 

promFs.unlinkPromise(path3)
.then(isDelted => {
  console.log(isDelted);
}).catch(err => {
  console.log(err);
}) 

async function unlinkAsync(){
  try {
    const isDelted = await promFs.unlinkPromise(path3);
    console.log(isDelted);
  }

  catch(er){
console.log(er);
  }
}
unlinkAsync();