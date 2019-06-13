const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<div id="content">Moshiko is the king</div>`);

console.log(dom.window.document.querySelector("#content").textContent); 