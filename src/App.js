import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        // Provider let redux communicate with react
        // Provider only can serve one child component
        // Provider store all application states (which is stored in one Store)
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};
    
export default App;
