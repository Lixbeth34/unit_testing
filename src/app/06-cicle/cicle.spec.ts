import { circle  } from './circle';

describe('circleArea', () => {
  it('Should return 0, if radio is 0', () => {
    const result = circle(0);
    expect(result).toBe(0)
  });
});

describe('circleArea', () => {
  it('Should return 0, if radio is negative', () => {
    const result = circle(-1);
    expect(result).toBe(0)
  });
});

describe('getArea', () => {
  it('Should return 3.1416 if radio is 1', () => {
    const result = circle(1);
    expect(result).toBe(3.1416)
  });
});

describe('circleArea', () => {
  it('Should return 12.5664 if radio is 2', () => {
    const result = circle(2);
    expect(result).toBe(12.5664)
  });
});

describe('circleArea', () => {
  it('Should return 28.2744 if radio is 3', () => {
    const result = circle(3);
    expect(result).toBe(28.2744)
  });
});