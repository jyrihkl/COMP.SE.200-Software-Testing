import reduce from '../src/reduce';

describe('reduce', () => {
    it('should correctly reduce an array of numbers', () => {
        expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).toBe(6);
    });

    it('should correctly reduce an object', () => {
        const object = { 'cat': 1, 'dog': 2, 'rat': 1 };
        const result = reduce(object, (acc, value, key) => {
            (acc[value] || (acc[value] = [])).push(key);
            return acc;
        }, {});
        expect(result).toEqual({ '1': ['cat', 'rat'], '2': ['dog'] });
    });

    it('should use the first element as the accumulator if not provided', () => {
        expect(reduce([1, 2, 3], (sum, n) => sum + n)).toBe(6);
    });

    it('should return the initial accumulator for an empty array', () => {
        expect(reduce([], (sum, n) => sum + n, 0)).toBe(0);
    });

    it('should return the initial accumulator for an empty object', () => {
        expect(reduce({}, (sum, n) => sum + n, 0)).toBe(0);
    });

    it('should return the initial accumulator when the collection is invalid', () => {
        expect(reduce(null, (sum, n) => sum + n, 0)).toBe(0);
        expect(reduce(123, (sum, n) => sum + n, 0)).toBe(0);
    });

    it('should throw an error when the iteratee is not a function', () => {
        expect(() => reduce([1, 2, 3], null, 0)).toThrow();
        expect(() => reduce([1, 2, 3], 'not a function', 0)).toThrow();
    });

    it('should handle string concatenation as an iteratee', () => {
        const array = ['a', 'b', 'c'];
        expect(reduce(array, (acc, str) => acc + str, '')).toBe('abc');
    });

    it('should handle boolean logic in iteratee', () => {
        const array = [true, false, true];
        expect(reduce(array, (acc, bool) => acc && bool, true)).toBe(false);
    });

    it('should handle reducing an array of objects', () => {
        const array = [{ x: 1 }, { x: 2 }, { x: 3 }];
        const result = reduce(array, (acc, obj) => acc + obj.x, 0);
        expect(result).toBe(6);
    });

    it('should reduce an array to an object', () => {
        const array = [1, 2, 3];
        const result = reduce(array, (acc, value) => {
            acc[value] = value * 2;
            return acc;
        }, {});
        expect(result).toEqual({ 1: 2, 2: 4, 3: 6 });
    });
});