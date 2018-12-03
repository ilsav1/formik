// Core
import React from 'react';
import { render } from 'react-dom';

const UiKit = {
    Header() {
        return <h1>Йоу, а давайте напишем свою библиотеку UI-компонентов!</h1>;
    },
    Footer() {
        return <h1>Дааа, и карусель. Ура! 🎠</h1>;
    },
};

render(<UiKit.Footer />, document.getElementById('app'));
