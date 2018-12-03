// Core
import { Parent } from './Parent';

const message = 'Lorem ipsum dolor sit amet!';

const result = shallow(<Parent message = { message } />);

describe('example-14', () => {
    test('test-1', () => {
        expect(result.state()).toEqual({
            isMessageShown: false,
        });
        expect(result.find('p')).toHaveLength(0);
    });

    test('test-2', () => {
        result.setState({
            isMessageShown: true,
        });
        expect(result.find('p')).toHaveLength(1);
        expect(result.state()).toEqual({
            isMessageShown: true,
        });
    });
});
