// Core
import { random, lorem } from 'faker';

export const log = (message, color) => {
    console.log(`%c ${message}`, `background: #222; color: ${color}`);
};

export const delay = (duration = 1000) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

export class Post {
    constructor(comment = `🐓 ${lorem.sentence(3)}`) {
        this.id = random.uuid();
        this.comment = comment;
    }
}

export const measure = (expression, message) => {
    console.time(message);
    typeof expression === 'function' ? expression() : expression;
    console.timeEnd(message);
};

export const sum = (array) => array.reduce((a, b) => a + b);

export const memoize = (fn) => {
    let previousArgument = null;
    let previousResult = null;

    return (argument) => argument === previousArgument
        ? previousResult
        : (previousArgument = argument,
        previousResult = fn.call(this, argument));
};

export const memoizeBad = (fn) => {
    const cache = {};

    return (argument) => {
        const hash = JSON.stringify(argument);
        if (hash in cache) {
            return cache[ hash ];
        }

        return cache[ hash ] = fn.call(this, argument);
    };
};

export const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
