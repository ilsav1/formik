Date.now = jest.fn(() => 22);

const getDate = () => Date.now();

describe('«getDate» function:', () => {
    test('should return deterministic value', () => {
        const value = getDate();

        expect(value).toBe(22);
    });

    test('«Date.now» should have been called once', () => {
        expect(Date.now).toHaveBeenCalledTimes(1);
    });

    test('«Date.now» should return deterministic value', () => {
        expect(Date.now).toHaveBeenCalledTimes(1);
        expect(Date.now).toHaveReturnedWith(22);
    });
});
