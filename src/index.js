import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    adress: 'adress1',
    date: '',
    time:''

}

function booking_process(state=initialState, action){
    if(action.type === 'ADD_RESERV'){
        return[
            ...state,
            action.data
        ]
    }
    return state;
}

const store = createStore(booking_process);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
