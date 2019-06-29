import { TrustedUrlPipe } from './trusted-url.pipe';

describe('TrustedUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new TrustedUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
