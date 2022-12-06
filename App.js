/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {Route, NativeRouter, Switch} from 'react-router-native';
import CharacterDetails from './src/Screens/CharacterDetails';
import Home from './src/Screens/Home';
import {Provider} from 'react-redux';
import store from './src/Store';
import Favourite from './src/Screens/Favourite';
import {PersistGate} from 'redux-persist/integration/react';
import {persistedStore} from './src/Store/index';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <ApolloProvider client={client}>
            <SafeAreaView />
            <NativeRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  path="/characterDetails/:id"
                  component={CharacterDetails}
                />
                <Route path="/favourite" component={Favourite} />
              </Switch>
            </NativeRouter>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
