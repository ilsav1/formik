// Core
import { Parent } from './Parent';

const result = shallow(<Parent />);

describe('example-5', () => {
    test('test-1', () => {
        expect(result.find('h1').text()).toBe('Welcome!');
    });
});
