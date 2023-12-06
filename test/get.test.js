import get from '../src/get';

describe('get', () => {
    const object = {
        country: [
            {name: 'Finland', cities: [{name: 'Tampere', universities: ['Tampere university']}]},
            {name: 'Sweden', cities: [{name: 'Stockholm', universities: ['Stockholm university']}]}
        ]
    };

    it('should get correct value at nested path', () => {
        expect(get(object, 'country[0].name')).toBe('Finland');
        expect(get(object, 'country[0].cities[0].universities[0]')).toBe('Tampere university');
    });

    it('should return the default value for non-existent paths', () => {
        expect(get(object, ['country.name'], 'default')).toBe('default');
    });

    it('should return undefined for non-existent paths without a default value', () => {
        expect(get(object, 'country.name')).toBeUndefined();
    });

    it('should return undefined if the object is null or undefined', () => {
        expect(get(null, 'a.b.c')).toBeUndefined();
        expect(get(undefined, 'a.b.c')).toBeUndefined();
    });

    it('should handle an empty path', () => {
        expect(get(object, '')).toBeUndefined();
        expect(get(object, [])).toBeUndefined();
    });

    it('should handle integer paths', () => {
        const arrayWithValues = ['a', 'b', 'c'];
        expect(get(arrayWithValues, 1)).toBe('b');
    });

    it('should return undefined if the object is not an object', () => {
        expect(get(123, 'a')).toBeUndefined();
        expect(get('string', 'a')).toBeUndefined();
    });
});