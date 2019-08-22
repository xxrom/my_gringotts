import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styled from 'styled-components';

const LabelInput = ({ label, value, onChange, placeholder }) => (
  <LabelInputStyled>
    <LabelStyled>{label}:</LabelStyled>
    <InputStyled
      onChangeText={text => onChange(text)}
      value={value}
      keyboardType="number-pad"
      placeholder={placeholder}
    />
  </LabelInputStyled>
);

export { LabelInput };

const LabelInputStyled = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const LabelStyled = styled(Text)`
  flex: 1;
  /*border: 1px solid red;*/
`;
const InputStyled = styled(TextInput)`
  flex: 1;
  /*border: 1px solid green;*/
  padding: 5px;
`;
