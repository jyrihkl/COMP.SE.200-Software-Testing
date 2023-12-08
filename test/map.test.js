import map from '../src/map';

describe('map', () => {
  it('should apply the iteratee function to each element in the array and return a new array', () => {
    function square(n) {
      return n * n;
    }

    expect(map([4, 8], square)).toEqual([16, 64]);
  });

  it('should return an empty array for an empty input array', () => {
    function square(n) {
      return n * n;
    }

    expect(map([], square)).toEqual([]);
  });

  it('should throw an error if iteratee is not provided', () => {
    expect(() => map([1, 2, 3])).toThrow(TypeError);
  });

  it('should pass index and original array to the iteratee function', () => {
    const mockIteratee = jest.fn();
    const inputArray = [1, 2, 3];

    map(inputArray, mockIteratee);

    // Ensure the iteratee is called for each element with correct arguments
    expect(mockIteratee).toHaveBeenCalledWith(1, 0, inputArray);
    expect(mockIteratee).toHaveBeenCalledWith(2, 1, inputArray);
    expect(mockIteratee).toHaveBeenCalledWith(3, 2, inputArray);
  });

  it('should handle edge cases like null and undefined as the input array', () => {
    function square(n) {
      return n * n;
    }

    expect(map(null, square)).toEqual([]);
    expect(map(undefined, square)).toEqual([]);
  });
});
