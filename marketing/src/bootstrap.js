import React from 'react';
import ReactDOM from 'react-dom';

function mount(el) {
    ReactDOM.render(<h1>hi there!</h1>, el);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };