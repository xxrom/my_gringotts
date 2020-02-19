import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// import React from 'react';
// import { View, Text } from 'react-native';

// const App: () => React$Node = () => {
//   return (
//     <View>
//       <Text>Engine: Hermes</Text>
//     </View>
//   );
// };

// export default App;

// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

// export default class NativeSample extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Hello World!..</Text>
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('chatapp', () => NativeSample);
// AppRegistry.registerComponent('NativeSample', () => NativeSample);

// import { AppRegistry, Text, View } from 'react-native';
// // import { Provider } from 'react-redux';
// import React, { Fragment } from 'react';

// // import Router from './src/Router';
// // import { name } from './app.json';
// import App from 'App.js';
// // import store from './src/store';

// AppRegistry.registerComponent('App', () => App);

// AppRegistry.registerComponent(
//   name,
//   () => App,
//   // <Provider store={store}>Router</Provider>
// );

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }
