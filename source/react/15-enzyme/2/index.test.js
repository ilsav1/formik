// Core
import { Parent } from './Parent';

const result = shallow(<Parent />);

const expected
    = '<section><h1>Welcome!</h1><p>Lorem ipsum dolor sit amet!</p></section>';

describe('example-2', () => {
    test('test-1', () => {
        expect(result.html()).toBe(expected);
    });
});
