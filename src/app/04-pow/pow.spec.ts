import {pow} from './pow';

describe('pow', () => {
  it ('should return the pow function', () => {
    const result = pow(2,3);
    expect(result).toBe(8)
  })
})

describe('pow', () => {
  it ('should return the pow function', () => {
    const result = pow(2,0);
    expect(result).toBe(1)
  })
})

describe('pow', () => {
  it ('should return the pow function', () => {
    const result = pow(2,-3);
    expect(result).toBe(0)
  })
})