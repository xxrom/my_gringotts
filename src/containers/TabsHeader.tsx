import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

const TabsHeader = () => {
  const underlayColor = '#00000010';
  return (
    <Header>
      <Tab underlayColor={underlayColor} to="/steps">
        <Text>Steps</Text>
      </Tab>
      <Separate />
      <Tab underlayColor={underlayColor} to="/result">
        <Text>Result</Text>
      </Tab>
      <Separate />
      <Tab underlayColor={underlayColor} to="/parameters">
        <Text>Parameters</Text>
      </Tab>
    </Header>
  );
};
export { TabsHeader };

const Header = styled(View)`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
`;

const Tab = styled(Link)`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Separate = styled(View)`
  width: 0;
  padding: 10px 0 10px 0;
  border-color: gray;
  border-left-width: 1px;
`;
