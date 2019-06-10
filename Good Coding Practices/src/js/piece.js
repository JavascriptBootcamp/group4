// piece object
const piece = (function () {
    // let el = null;
    const init = function (el) {
        this.el = el;
        this.defPos = el.getBoundingClientRect();
        this.elWidth = Math.floor(this.defPos.width);
        this.elHeight = Math.floor(this.defPos.height);
        this.spaceForBorder = 2;
    }
    const moveDelta = function (dx, dy) {
        const pos = this.el.getBoundingClientRect();
        let yPos;
        let xPos;

        yPos = movePiece(pos.top, dy, (window.innerHeight - this.elHeight - this.spaceForBorder));
        xPos = movePiece(pos.left, dx, (window.innerWidth - this.elWidth - this.spaceForBorder));

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
        this.setElePos(this.defPos.top, this.defPos.left);
    }
    const randPieceLoc = function () {
        const randLocTop = Math.floor(Math.random() * (window.innerHeight - this.elHeight - this.spaceForBorder));
        const randLocLeft = Math.floor(Math.random() * (window.innerWidth - this.elWidth - this.spaceForBorder));
        this.setElePos(randLocTop, randLocLeft);
    }
    const setElePos = function (topPos, leftPos) {
        this.el.style.top = `${topPos}px`;
        this.el.style.left = `${leftPos}px`;
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

        this.el.classList.add(color);
    }
    return {
        init,
        moveDelta,
        resetPieceLoc,
        randPieceLoc,
        setElePos,
        setPieceColor
    };
})();