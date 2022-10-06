import { fact } from './fact';

describe('fact', () => {
  it(' Should return 1 if n is 0', () => {
    const result = fact(0);
    expect(result).toBe(1);
  });
});

describe('fact', () => {
    it('Should return 0 if n is negative', () => {
      const result = fact(-1);
      expect(result).toBe(0);
    });
  });

describe('fact', () => {
  it('should return the fact of the numbers', () => {
    const result = fact(3);
    expect(result).toBe(6);
  });
});

describe('fact', () => {
  it('should return the fact of the numbers', () => {
    const result = fact(4);
    expect(result).toBe(24);
  });
});

describe('fact', () => {
  it('should return the fact of the numbers', () => {
    const result = fact(5);
    expect(result).toBe(120);
  });
});

describe('fact', () => {
  it('should return the fact of the numbers', () => {
    const result = fact(17);
    expect(result).toBe(0);
  });
});