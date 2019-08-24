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
  amount: string;
  type: TypeEnum.FixedAmount;
  repeat: {
    each: RepeatEnum.EachMonthDay;
    value: number;
  };
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
  const [isShowedPopup, setIsShowedPopup] = useState(false); // default - false
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    data.getSteps().then(res => setSteps(res));
  }, []);

  // data.storeSteps(steps).then(() => {
  //   console.log('dataStored outside !!!');
  //   data.getSteps().then(res => {
  //     console.log('get data !!!', res);
  //   });
  // });

  const onAdd = () => {
    setIsShowedPopup(true);

    const newSteps = [...steps, step];
    setSteps(newSteps);
    data.storeSteps(newSteps);
  };
  const onClose = (index: number) => () => {
    console.log(`onClose  ${index}`);
  };
  return (
    <Wrapper>
      <Text>Steps 22:</Text>
      <Icon name="rowing" />

      <ListWrapper>
        {steps.map((item, index) => (
          <StepWrapper key={index}>
            <Type>{item.type}</Type>

            <Amount value={item.amount} />

            <Repeat each={item.repeat.each} value={item.repeat.value} />
            <Icon onPress={onClose(index)} size={15} name="close" />
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
