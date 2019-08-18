import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import Containers from 'containers';
const { Steps, TabsHeader } = Containers;

const Router = () => (
  <NativeRouter>
    <View>
      <Route path="/" component={TabsHeader} />

      <Route exact path="/" component={Steps} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/topics" component={Topics} /> */}
    </View>
  </NativeRouter>
);

export default Router;
