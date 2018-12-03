const getArray = () => [ 'a valid data' ];

test('«getArray» function should return an array with valid data', () => {
    expect(getArray()).toEqual(expect.arrayContaining([ 'a valid data' ]));
});
