import React, { Fragment, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { calculate } from './lib';
import { StepProps } from '@containers/Steps';
import { data } from '@helper';
import get from 'lodash.get';
import styled from 'styled-components/native';

type StepsInfoProps = Array<{
  weekDay?: number;
  monthDay?: number;
  month?: string | number; // ???
  index: number; // 0 - (+100500)
  date: string; // '31.03.2020';
  // events: Array<{
  //   sum: number; // sum after
  //   description: string; // 'salary', 'internet'...
  //   stepProps: StepProps; // step info
  // }>;
}>;

const Result = () => {
  return (
    <Wrapper>
      <Text>Result 22</Text>
    </Wrapper>
  );
};

export { Result };

const Wrapper = styled(View)`
  padding: 8px;
`;
const Block = styled(View)`
  padding: 8px;
  border: 1px solid red;
`;
