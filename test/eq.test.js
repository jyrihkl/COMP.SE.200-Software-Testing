import eq from '../src/eq';

describe('eq', () => {
  it('should return true for identical objects', () => {
    const object = { 'a': 1 };
    expect(eq(object, object)).toBe(true);
  });

  it('should return false for different objects with the same properties', () => {
    const object = { 'a': 1 };
    const other = { 'a': 1 };
    expect(eq(object, other)).toBe(false);
  });

  it('should return true for identical strings', () => {
    expect(eq('a', 'a')).toBe(true);
  });

  it('should return false for different strings with the same characters', () => {
    expect(eq('a', Object('a'))).toBe(false);
  });

  it('should return true for identical NaN values', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

  it('should return false for NaN and a different value', () => {
    expect(eq(NaN, 42)).toBe(false);
  });

  it('should return true for positive zero and negative zero', () => {
    expect(eq(0, -0)).toBe(true);
  });

  it('should return false for positive zero and a non-zero value', () => {
    expect(eq(0, 42)).toBe(false);
  });

  it('should return false for negative zero and a non-zero value', () => {
    expect(eq(-0, 42)).toBe(false);
  });

  it('should return false for objects with different properties', () => {
    const object1 = { 'a': 1 };
    const object2 = { 'b': 2 };
    expect(eq(object1, object2)).toBe(false);
  });

  it('should return false for different types', () => {
    expect(eq('42', 42)).toBe(false);
  });
});
