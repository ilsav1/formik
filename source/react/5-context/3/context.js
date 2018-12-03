// Core
import { createContext } from 'react';

const fallbackData = {
    title: 'Lord of The Rings',
    page:  1489,
};

export const { Provider, Consumer } = createContext(fallbackData);
