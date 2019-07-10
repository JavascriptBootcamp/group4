import { SqrtPipe } from './app.sqrt';

describe('Given a pipe which calculates square root', () => {
    describe('When calculating square root of 25', () => {
        it('Then the result should be 5', () => {
            let sqrtPipe:SqrtPipe = new SqrtPipe();
            expect(sqrtPipe.transform(25)).toBe(5);
        });
    })
});