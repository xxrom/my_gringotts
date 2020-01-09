import React, { useState, useEffect } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';

import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';
import { data } from '@helper';

import { Amount, Repeat, AddStepDialog } from './components';

export enum TypeEnum {
  FixedAmount = 'fixedAmount',
}

export enum RepeatEnum {
  EachMonthDay = 'EachMonthDay',
}
export interface StepProps {
  amount: string | number;
  type: TypeEnum.FixedAmount;
  repeat: {
    each: RepeatEnum;
    value: number;
  };
}
export interface onSaveProps {
  amount: number;
  type: TypeEnum;
  repeatEach: RepeatEnum;
  repeatValue: number;
}
const step: StepProps = {
  amount: '10000',
  type: TypeEnum.FixedAmount,
  repeat: {
    each: RepeatEnum.EachMonthDay,
    value: 10,
  },
};

const Steps = () => {
  const [isShowedPopup, setIsShowedPopup] = useState(false); // default - false
  const [steps, setSteps] = useState([] as Array<StepProps>);

  useEffect(() => {
    data.getSteps().then(res => setSteps(res));
  }, []);

  const setEverywhereSteps = (newSteps: Array<StepProps>) => {
    setSteps(newSteps);
    data.storeSteps(newSteps);
  };
  const onOpenDialog = () => setIsShowedPopup(true);
  const onClose = (index: number) => () => {
    const firstPart = steps.slice(0, index);
    const secondPart = steps.slice(index + 1);
    setEverywhereSteps([...firstPart, ...secondPart]);
  };
  const onSave = ({ amount, type, repeatValue, repeatEach }: onSaveProps) => {
    console.log('Steps, onSave ', amount, type);
    const newStep = {
      ...step,
      amount,
      type,
      repeat: {
        each: repeatEach,
        value: repeatValue,
      },
    };
    setEverywhereSteps([newStep, ...steps]);
  };
  const onTouchOutside = () => setIsShowedPopup(false);

  return (
    <Wrapper>
      <ScrollView>
        {steps.map((item: StepProps, index: number) => (
          <StepWrapper key={index}>
            <Cell>
              <Type>{item.type}</Type>
            </Cell>
            <Cell>
              <Amount value={item.amount} />
            </Cell>
            <Cell>
              <Repeat each={item.repeat.each} value={item.repeat.value} />
            </Cell>

            <Icon onPress={onClose(index)} size={15} name="close" />
          </StepWrapper>
        ))}
      </ScrollView>

      <AddStepDialog
        isShowedPopup={isShowedPopup}
        onTouchOutside={onTouchOutside}
        onSave={onSave}
      />

      <Button title="Add New Point" onPress={onOpenDialog} />
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  position: relative;
  flex: 1;
`;

const StepWrapper = styled(View)`
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  margin: 2.5px 5px;
`;
const Type = styled(Text)`
  padding: 5px 10px;
  border-radius: 50;
  color: white;
  background-color: gray;
  font-size: 10;
`;
const Cell = styled(View)`
  flex: 1;
`;

export { Steps };
