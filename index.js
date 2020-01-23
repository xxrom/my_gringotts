import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import Router from './src/Router';
import { name } from './app.json';
import store from './src/store';

AppRegistry.registerComponent(name, () => (
  <Provider store={store}>Router</Provider>
));
