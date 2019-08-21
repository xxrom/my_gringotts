import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import { RepeatEnum } from '../Steps';

interface RepeatProps {
  each: RepeatEnum;
  value: number | string;
}

const Repeat = ({ each, value }: RepeatProps) => {
  return (
    <Wrapper>
      <Each>{each}:</Each>
      <RepeatValue>{value}</RepeatValue>
    </Wrapper>
  );
};

export { Repeat };

const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const Each = styled(Text)`
  font-size: 10;
`;
const RepeatValue = styled(Text)`
  color: blue;
`;
