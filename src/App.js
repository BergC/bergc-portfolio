import React, { Fragment } from 'react';

// Styles
import './App.scss';

// Components
import Contact from './components/Contact';
import Display from './components/Display';
import Nav from './components/Nav';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
    <Provider store={store}>
        <Nav />
        <Display />
        <Contact />
    </Provider>
);

export default App;
