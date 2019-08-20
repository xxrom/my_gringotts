import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

interface AmountSignProps {
  value: number | string;
}

const AmountSign = ({ value }: AmountSignProps) => {
  return <Sign>{+value > 0 ? '+' : '-'}</Sign>;
};

const Sign = styled(Text)`
  color: blue;
  font-size: 20;
`;

export { AmountSign };
