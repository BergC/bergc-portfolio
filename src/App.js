import React from 'react';

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
        <div className='wrapper'>
            <Nav />

            <div>
                <Display />
            </div>

            <Contact />
        </div>
    </Provider>
);

export default App;
