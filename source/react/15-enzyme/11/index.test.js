// Core
import { Parent } from './Parent';
import { mount } from 'enzyme';

const result = mount(<Parent />);

describe('example-11', () => {
    test('test-1', () => {
        expect(result).toMatchSnapshot();
    });
});
