const { Calc } = require('./calculator');

describe('Given a calculator', () => {
    describe('When summing 1 and 2', () => {
        const calc = new Calc(1,2);
        const sum = calc.sum();
        it.only('Then result should be 3', () => {
            expect(sum).toBe(3);
            for (let i=4; i<=100; i++){
                expect(sum).not.toBe(i);
            }
        })
    });
    describe('When summing a string and a number', () => {
        const calc = new Calc("lital", 2);
        const sum = calc.sum();
        it('Then result should be an error message', () => {
            expect(sum).toBe("Wrong input");
        })
    });
})
