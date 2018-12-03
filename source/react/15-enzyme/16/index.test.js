// Core
import { Parent } from './Parent';

const result = shallow(<Parent />);

const name = '';
const initialState = { name };
const updatedName = 'Madonna';
const updatedState = {
    name: updatedName,
};

describe('example-16', () => {
    test('test-1', () => {
        expect(result.state()).toEqual(initialState);
        expect(result.find('h1').text()).toBe(`Welcome, ${name}!`);
    });

    test('test-2', () => {
        result.find('input').simulate('change', {
            target: {
                value: updatedName,
            },
        });
        expect(result.state()).toEqual(updatedState);
        expect(result.find('h1').text()).toBe(`Welcome, ${updatedName}!`);
    });
});
