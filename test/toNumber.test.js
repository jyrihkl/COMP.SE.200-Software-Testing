import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
  it('should convert a positive integer to a number', () => {
    expect(toNumber(42)).toBe(42);
  });

  it('should convert a negative integer to a number', () => {
    expect(toNumber(-42)).toBe(-42);
  });

  it('should convert a positive float to a number', () => {
    expect(toNumber(3.14)).toBe(3.14);
  });

  it('should convert a negative float to a number', () => {
    expect(toNumber(-3.14)).toBe(-3.14);
  });

  it('should convert Number.MIN_VALUE to a number', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
  });

  it('should convert Infinity to a number', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  it('should convert a numeric string to a number', () => {
    expect(toNumber('42')).toBe(42);
  });

  it('should convert a numeric string with leading and trailing spaces to a number', () => {
    expect(toNumber(' 42 ')).toBe(42);
  });

  it('should convert a binary string to a number', () => {
    expect(toNumber('0b1010')).toBe(10);
  });

  it('should convert an octal string to a number', () => {
    expect(toNumber('0o777')).toBe(511);
  });

  it('should convert a hexadecimal string to a number', () => {
    expect(toNumber('0x1a')).toBe(26);
  });

  it('should return NaN for a Symbol', () => {
    expect(toNumber(Symbol('test'))).toBe(NaN);
  });

  it('should return NaN for an object', () => {
    expect(toNumber({ key: 'value' })).toBe(NaN);
  });

  it('should return NaN for an invalid hexadecimal string', () => {
    expect(toNumber('-0x123')).toBe(NaN);
  });

  it('should return NaN for an invalid binary string', () => {
    expect(toNumber('0b2')).toBe(NaN);
  });

  it('should return 0 for an empty string', () => {
    expect(toNumber('')).toBe(0);
  });
});

