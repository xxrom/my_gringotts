import React from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import styled from 'styled-components';

const LabelPicker = ({ label, list, onChange = () => {}, selectedValue }) => {
  const onValueChange = value => onChange(value);
  return (
    <LabelPickerStyled>
      <LabelStyled>{label}:</LabelStyled>
      <PickerStyled onValueChange={onValueChange} selectedValue={selectedValue}>
        {list.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </PickerStyled>
    </LabelPickerStyled>
  );
};

export { LabelPicker };

const LabelPickerStyled = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const LabelStyled = styled(Text)`
  flex: 1;
  /*border: 1px solid red;*/
`;
const PickerStyled = styled(Picker)`
  height: 50px;
  width: 50px;
  flex: 1;
  /*border: 1px solid green;*/
  padding: 5px;
`;
