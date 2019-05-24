// piece object
const piece = (function () {
    // let el = null;
    const init = function (el) {
        this.el = el;
        this.setPieceColorByTemp()
    }
    const moveDelta = function (dx, dy) {
        const pos = this.el.getBoundingClientRect();
        let yPos = this.movePiece(pos.top, dy, (window.innerHeight - 100));
        let xPos = this.movePiece(pos.left, dx, (window.innerWidth - 100));
        this.setElePos(yPos, xPos);
    }
    const movePiece = function (curPos, ds, size) {
        let pos;
        let tmpPos = curPos + ds;
        if (tmpPos > 0 && tmpPos < size)
            pos = tmpPos;
        else if (tmpPos > 0 && tmpPos > size)
            pos = size;
        else if (tmpPos < 0 && tmpPos < size)
            pos = 0;

        return pos;
    }
    const resetPieceLoc = function () {
        const posTop = sessionStorage.getItem("defPosTop");
        const posLeft = sessionStorage.getItem("defPosLeft");
        this.setElePos(posTop, posLeft);
    }
    const randPieceLoc = function () {
        const randLocTop = Math.floor(Math.random() * (window.innerHeight - 100));
        const randLocLeft = Math.floor(Math.random() * (window.innerWidth - 100));
        this.setElePos(randLocTop, randLocLeft);
    }
    const setElePos = function (topPos, leftPos) {
        this.el.style.top = `${topPos}px`;
        this.el.style.left = `${leftPos}px`;
    }
    const setPieceColorByTemp = function () {
        const url = 'http://api.apixu.com/v1/current.json?key=dda6e762ae4f41efb7e173552192204&q=tel%20aviv';
        fetch(url)
            .then(response => response.json())
            .then(data => this.setPieceColor(data.current.temp_c));
    }
    const setPieceColor = function (deg) {
        let color;
        if (deg < 10)
            color = "blue";
        else if (deg < 21)
            color = "green";
        else if (deg < 31)
            color = "yellow";
        else
            color = "red";

        this.el.style.backgroundColor = color;
        this.el.style.borderColor = color;
    }
    return {
        init,
        moveDelta,
        movePiece,
        resetPieceLoc,
        randPieceLoc,
        setElePos,
        setPieceColorByTemp,
        setPieceColor
    };
})();