const add = (a, b) => a + b;

test('«add» function should add two numbers', () => {
    expect(add(2, 2)).toBe(4);
    expect(add(1, 3)).toBe(4);
});
