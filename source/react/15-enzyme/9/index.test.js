// Core
import { Parent } from './Parent';
import { Child } from './Child';

const result = shallow(<Parent />);

describe('example-9', () => {
    test('test-1', () => {
        expect(result.find(Child)).toHaveLength(1);
    });
});
