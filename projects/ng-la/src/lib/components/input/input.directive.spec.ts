import { LaInputDirective } from './input.directive';

describe('LaInputDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new LaInputDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
