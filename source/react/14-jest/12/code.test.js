/* eslint-disable require-await */

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

global.fetch = jest.fn(async (url) => {
    return {
        async json() {
            return `A call to ${url} was successful`;
        },
    };
});

class Api {
    async getTodos() {
        const response = await fetch(API_URL);
        const result = await response.json();

        return result;
    }
}

const api = new Api();

describe('«api.getUsers»:', () => {
    test('should send a fetch request and yield data', async () => {
        await expect(api.getTodos()).resolves.toMatchSnapshot();
    });

    test('should call «fetch» function one time', () => {
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).not.toHaveBeenCalledTimes(2);
    });

    test('should send a fetch request to valid url', () => {
        expect(fetch).toHaveBeenCalledWith(API_URL);
    });
});
