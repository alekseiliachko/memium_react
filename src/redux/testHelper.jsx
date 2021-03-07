import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from "react";

export const getStubStoreData =  () => require('./testData.json');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

export const withStore = (initialStore) => {
    const store = mockStore(initialStore || getStubStoreData());
    return function Wrapper({ children }) {
        return <Provider store={store}>
            {children}
        </Provider>
    }
}
