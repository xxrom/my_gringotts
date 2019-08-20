import React, { Fragment, useState } from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components';

import { Amount, Repeat } from './components';

export enum TypeEnum {
  FixedAmount = 'fixedAmount',
}

export enum RepeatEnum {
  EachMonthDay = 'EachMonthDay',
}

const Steps = () => {
  const step = {
    amount: '10000',
    type: TypeEnum.FixedAmount,
    repeat: {
      each: RepeatEnum.EachMonthDay,
      value: 10,
    },
  };

  const [steps, setSteps] = useState([step, step, step, step, step]);
  const onAdd = () => {
    setSteps([...steps, step]);
  };
  return (
    <Fragment>
      <Text>Steps:</Text>
      <ListWrapper>
        {steps.map((item, index) => (
          <StepWrapper key={index}>
            <Type>{item.type}</Type>

            <Amount value={item.amount} />

            <Repeat each={item.repeat.each} value={item.repeat.value} />
          </StepWrapper>
        ))}
      </ListWrapper>
      <Button title="AddNew" onPress={onAdd} />
    </Fragment>
  );
};

const StepWrapper = styled(View)`
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  margin: 2.5px 5px;
  /* border: 1px solid red; */
`;
const ListWrapper = styled(View)`
  height: 60%;
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
