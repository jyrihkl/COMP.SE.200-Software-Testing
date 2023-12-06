import capitalize from '../src/capitalize';

describe('capitalize', () => {
    it('should convert only first string character to uppercase', () => {
        expect(capitalize('finland')).toBe('Finland');
    });

    it('should lowercase the rest of characters except first one', () => {
        expect(capitalize('FINLAND')).toBe('Finland');
    });

    it('should handle mixed case strings', () => {
        expect(capitalize('fInLanD')).toBe('Finland');
    });
    
    it('should handle single string character', () => {
        expect(capitalize('a')).toBe('A');
    });

    it('should return empty string when given empty string', () => {
        expect(capitalize('')).toBe('');
    });

    // FAILED
    it('should handle strings with leading and trailing space', () => {
        expect(capitalize('   finlanD ')).toBe('Finland');
        // Received: '   finland '
    });

    it('should handle string numbers', () => {
        expect(capitalize('123Abc')).toBe('123abc');
    });
});