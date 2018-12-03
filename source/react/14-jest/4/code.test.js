const getTruthy = () => [ 1, 2, 3 ];
const getFalsy = () => '';

test('should return a «truthy» value', () => {
    expect(getTruthy()).toBeTruthy();
});

test('should return a «falsy» value', () => {
    expect(getFalsy()).toBeFalsy();
});
