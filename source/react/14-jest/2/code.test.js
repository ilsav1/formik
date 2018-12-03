class Person {
    constructor(name) {
        this.name = name;
    }
}

test('«Person» constructor produces an object with name property', () => {
    expect(new Person('Jack')).toEqual({
        name: 'Jack',
    });
});
