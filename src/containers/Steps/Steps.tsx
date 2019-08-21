import React, { Fragment, useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { Amount, Repeat, AddStepDialog } from './components';

export enum TypeEnum {
  FixedAmount = 'fixedAmount',
}

export enum RepeatEnum {
  EachMonthDay = 'EachMonthDay',
}
const step = {
  amount: '10000',
  type: TypeEnum.FixedAmount,
  repeat: {
    each: RepeatEnum.EachMonthDay,
    value: 10,
  },
};

const Steps = () => {
  const [isShowedPopup, setIsShowedPopup] = useState(false);
  const [steps, setSteps] = useState([step, step, step, step, step]);
  const onAdd = () => {
    setIsShowedPopup(true);
    setSteps([...steps, step]);
  };
  return (
    <Wrapper>
      <Text>Steps 22:</Text>
      <ListWrapper>
        {steps.map((item, index) => (
          <StepWrapper key={index}>
            <Type>{item.type}</Type>

            <Amount value={item.amount} />

            <Repeat each={item.repeat.each} value={item.repeat.value} />
          </StepWrapper>
        ))}
      </ListWrapper>

      <AddStepDialog
        isShowedPopup={isShowedPopup}
        onTouchOutside={() => setIsShowedPopup(false)}
      />

      <Button title="AddNew" onPress={onAdd} />
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  position: relative;
  flex: 1;
  border: 1px solid red;
`;

const StepWrapper = styled(View)`
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  margin: 2.5px 5px;
`;
const ListWrapper = styled(ScrollView)`
  border: 1px solid red;
`;
const Type = styled(Text)`
  padding: 5px 10px;
  border-radius: 50;
  color: white;
  background-color: gray;
  font-size: 10;
`;

export { Steps };
