import filter from '../src/filter';

describe('filter', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ];

    it('should filter an array of objects based on a predicate', () => {
        const result = filter(users, (user) => user.active);
        expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
    });

    it('should filter different data types', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = filter(numbers, (number) => number > 3);
        expect(result).toEqual([4, 5]);
    });

    // FAILED
    it('should return an empty array when no elements pass the predicate', () => {
        const result = filter(users, (user) => user.user === 'mary');
        expect(result).toEqual([]);
        // Received: [[]]
    });

    it('should correctly use the index in the predicate', () => {
        const numbers = [10, 20, 30, 40];
        expect(filter(numbers, (_value, index) => index < 2)).toEqual([10, 20]);
    });

    // FAILED
    it('should handle null and undefined array input gracefully', () => {
        expect(filter(null, value => value)).toEqual([]);
        expect(filter(undefined, value => value)).toEqual([]);
        // Received: [[]]
    });
});