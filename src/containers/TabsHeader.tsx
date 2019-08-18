import React, { Fragment } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const TabsHeader = () => {
  const onPress = () => {
    console.log('pressed');
  };
  console.log('Render Tabs');
  return (
    <Header>
      <Tab onPress={onPress}>hello</Tab>
      <Tab onPress={onPress}> hello</Tab>
      <Tab onPress={onPress}>hello</Tab>
    </Header>
  );
};
export { TabsHeader };

const Header = styled(View)`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: red;
`;

const Tab = styled(Text)`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: yellow;
  text-align: center;
  text-align-vertical: center;
  border: 1px solid black;
`;
