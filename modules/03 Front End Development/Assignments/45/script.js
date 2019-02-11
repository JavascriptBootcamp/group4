const picsPerPage = 12;
var picsDisplayer;
var pagesArray = [];

function initializeReferences()
{
    picsDisplayer = document.querySelector("#picsDisplayer");
    pageCounter = document.querySelector("#pageCounter");
}

function Page(pageNumber)
{
    this.pageNumber = pageNumber;
    this.pictures = [];
    
    picsDisplayer.innerHTML = "";

    this.addPicture = function(pic)
    {
        if(this.pictures.length < picsPerPage)
        {
            this.pictures.push(pic);
        }
    }

    this.getNumOfPictures = function()
    {
        console.log(this.pictures.length);
        return this.pictures.length;
    }

    this.createHTMLPageButton = function()
    {
        var btn = document.createElement("button");
        btn.innerText = this.pageNumber;
        btn.id = "page" + this.pageNumber;
        var self = this;
        btn.onclick = function()
        {
            self.displayPictures();
        }

        pageCounter.appendChild(btn);
    }

    this.displayPictures = function()
    {
        picsDisplayer.innerHTML = "";

        for(var i = 0; i < this.getNumOfPictures(); i++)
        {
            picsDisplayer.appendChild(this.pictures[i].createHTMLPicture());
        }
    }

    this.createHTMLPageButton();
}

function Picture(imgUrl, wikiUrl)
{
    this.imgUrl = imgUrl;
    this.wikiUrl = wikiUrl;

    this.createHTMLPicture = function()
    {
        var a = document.createElement("a");
        a.href = wikiUrl;

        var img = document.createElement("img");
        img.src = imgUrl;

        a.appendChild(img);

        return a;
    }
}

function add()
{
    picsDisplayer = document.querySelector("#picsDisplayer");
    pageCounter = document.querySelector("#pageCounter");
    var imgUrl = document.querySelector("#imgUrl").value;
    var wikiUrl = document.querySelector("#wikiUrl").value;
    var pic = new Picture(imgUrl, wikiUrl);
    
    if(pagesArray.length === 0)
    {
        currentPage = new Page(1); 
        pagesArray.push(currentPage);
    }
    else
    {
        currentPage = pagesArray[pagesArray.length - 1];
    }

    if(currentPage.getNumOfPictures() >= picsPerPage)
    {
        currentPage = new Page(pagesArray.length + 1);
        pagesArray.push(currentPage);
    }

    currentPage.addPicture(pic);
    currentPage.displayPictures();
}
