// piece object
const piece = (function () {
    // let el = null;
    let defPos = null;
    let elWidth = null;
    let elHeight = null;
    let spaceForBorder = null;
    const init = function (el) {
        this.el = el;
        defPos = el.getBoundingClientRect();
        elWidth = Math.floor(defPos.width);
        elHeight = Math.floor(defPos.height);
        spaceForBorder = 2;
    }
    const moveDelta = function (dx, dy) {
        const pos = this.el.getBoundingClientRect();
        let yPos;
        let xPos;

        yPos = movePiece(pos.top, dy, (window.innerHeight - elHeight - spaceForBorder));
        xPos = movePiece(pos.left, dx, (window.innerWidth - elWidth - spaceForBorder));

        this.setElePos(yPos, xPos);
    }
    function movePiece(curPos, ds, size) {
        let pos = 0;
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
        this.setElePos(defPos.top, defPos.left);
    }
    const randPieceLoc = function () {
        const randLocTop = Math.floor(Math.random() * (window.innerHeight - elHeight - spaceForBorder));
        const randLocLeft = Math.floor(Math.random() * (window.innerWidth - elWidth - spaceForBorder));
        this.setElePos(randLocTop, randLocLeft);
    }
    const setElePos = function (topPos, leftPos) {
        this.el.style.top = `${topPos}px`;
        this.el.style.left = `${leftPos}px`;
    }
    const setPieceColorByDeg = function (deg) {
        let color;
        if (deg < 10)
            color = "blue";
        else if (deg < 21)
            color = "green";
        else if (deg < 31)
            color = "yellow";
        else
            color = "red";

        this.el.classList.add(color);
    }
    return {
        init,
        moveDelta,
        resetPieceLoc,
        randPieceLoc,
        setElePos,
        setPieceColorByDeg
    };
})();