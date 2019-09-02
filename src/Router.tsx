import React from 'react';
import { View } from 'react-native';
import { Route, MemoryRouter } from 'react-router-native';
import styled from 'styled-components/native';

import { TabsHeader, Steps, Result, Parameters } from '@containers';

const Router = () => (
  <Wrapper>
    <MemoryRouter
      initialEntries={['/steps', '/result', '/parameters']}
      initialIndex={1}>
      <Route path="/" component={TabsHeader} />

      <Route exact path="/steps" component={Steps} />
      <Route exact path="/result" component={Result} />
      <Route exact path="/parameters" component={Parameters} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/topics" component={Topics} /> */}
    </MemoryRouter>
  </Wrapper>
);

const Wrapper = styled(View)`
  flex: 1;
  height: 100%;
`;

export default Router;
