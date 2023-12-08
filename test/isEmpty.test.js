import isEmpty from '../src/isEmpty';

describe('isEmpty', () => {
  it('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('should return true for true', () => {
    expect(isEmpty(true)).toBe(true);
  });

  it('should return true for 1', () => {
    expect(isEmpty(1)).toBe(true);
  });

  it('should return false for non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('should return false for non-empty string', () => {
    expect(isEmpty('abc')).toBe(false);
  });

  it('should return false for non-empty object', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });

  it('should return true for empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return true for empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return true for empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return true for empty map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  it('should return true for empty set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return true for empty arguments', () => {
    function testFunction() {
      expect(isEmpty(arguments)).toBe(true);
    }
    testFunction();
  });

  it('should return true for empty buffer', () => {
    expect(isEmpty(Buffer.alloc(0))).toBe(true);
  });

  it('should return true for empty typed array', () => {
    expect(isEmpty(new Uint8Array())).toBe(true);
  });

  it('should return true for an empty object with prototype value', () => {
    const emptyObject = Object.create(null); // An object with no prototype

    expect(isEmpty(emptyObject)).toBe(true);
  });

  it('should return false for a non-empty object with prototype value', () => {
    const nonEmptyObject = Object.create({ prop: 'value' }); // An object with a prototype

    expect(isEmpty(nonEmptyObject)).toBe(false);
  });
});
