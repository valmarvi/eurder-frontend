import { NamePipe } from './name.pipe';

describe('PipesPipe', () => {
  it('create an instance', () => {
    const pipe = new NamePipe();
    expect(pipe).toBeTruthy();
  });
});
