import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, MemoryRouter } from 'react-router-native';

import Containers from 'containers';
const { TabsHeader, Steps, Result, Parameters } = Containers;

const Router = () => (
  <MemoryRouter
    initialEntries={['/steps', '/result', '/parameters']}
    initialIndex={0}>
    <View>
      <Route path="/" component={TabsHeader} />

      <Route exact path="/steps" component={Steps} />
      <Route exact path="/result" component={Result} />
      <Route exact path="/parameters" component={Parameters} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/topics" component={Topics} /> */}
    </View>
  </MemoryRouter>
);

export default Router;
