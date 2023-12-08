import defaultTo from '../src/defaultTo';

describe('defaultTo', () => {
  it('should return the original value if not NaN, null, or undefined', () => {
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo('hello', 'world')).toBe('hello');
    expect(defaultTo(true, false)).toBe(true);
  });

  it('should return the default value if value is NaN', () => {
    expect(defaultTo(NaN, 42)).toBe(42);
  });

  it('should return the default value if value is null', () => {
    expect(defaultTo(null, 'default')).toBe('default');
  });

  it('should return the default value if value is undefined', () => {
    expect(defaultTo(undefined, 'default')).toBe('default');
  });

  it('should return 0 if value is 0', () => {
    expect(defaultTo(0, 42)).toBe(0);
  });

  it('should return false if value is false', () => {
    expect(defaultTo(false, true)).toBe(false);
  });

  it('should return an empty string if value is an empty string', () => {
    expect(defaultTo('', 'default')).toBe('');
  });

  it('should return null if default value is null', () => {
    expect(defaultTo(null, null)).toBe(null);
  });

  it('should return undefined if default value is undefined', () => {
    expect(defaultTo(undefined, undefined)).toBe(undefined);
  });
});
