import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import { AmountSign } from '.';

interface AmountProps {
  value: number | string;
}

const Amount = ({ value }: AmountProps) => {
  return (
    <Wrapper>
      {/* <Text>{'Amount: '}</Text> */}
      <AmountSign value={value} />
      <AmountValue>{value}</AmountValue>
    </Wrapper>
  );
};

export { Amount };

const Wrapper = styled(View)`
  margin: 0 10px;
  flex-direction: row;
  align-items: center;
`;
const AmountValue = styled(Text)`
  color: blue;
`;
