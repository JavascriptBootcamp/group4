import { TwoDigitsPipe } from './two-digits.pipe';

describe('TwoDigitsPipe', () => {
  it('create an instance', () => {
    const pipe = new TwoDigitsPipe();
    expect(pipe).toBeTruthy();
  });
});
