import add from '../src/add';

describe('add', () => {
    it('should sum up correctly positive integer', () => {
        expect(add(2, 3)).toBe(5);
    });

    it('should sum up correctly negative integer', () => {
        expect(add(-2, 5)).toBe(3);
    });

    it('should sum up correctly decimals', () => {
        expect(add(5.5, 4.5)).toBe(10);
    });

    it('should sum up correctly large numbers', () => {
        const largeNumber = Number.MAX_SAFE_INTEGER - 1;
        const smallNumber = 1
        expect(add(largeNumber, smallNumber)).toBe(Number.MAX_SAFE_INTEGER);
    });

    it('should return number itself if pass one argument', () => {
        expect(add(5)).toBe(5);
        expect(add(-5)).toBe(-5);
    });

    it('should return 0 if pass no argument', () => {
        expect(add()).toBe(0);
    });

    // FAILED
    it('should handle non-number inputs like strings gracefully', () => {
        expect(() => add('a', 5)).toThrow();
        // Received: 'a5'
    });

    // FAILED
    it('should handle non-number inputs like objects and arrays gracefully', () => {
        expect(() => add({}, [])).toThrow();
    });

    // FAILED
    it('should correctly handle string numbers due to type coercion', () => {
        expect(add('5', 5)).toBe(10);
        // Received: '55'
    });
})