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
  events: Array<{
    sum: number; // sum after
    description: string; // 'salary', 'internet'...
    stepProps: StepProps; // step info
  }>;
}>;

const Result = () => {
  const [state, setState] = useState({});
  console.log('render Result');

  // const stepsInfo: StepsInfoProps = calculate();

  useEffect(() => {
    data.getSteps().then(res => {
      setState(calculate(res));
    });
  }, []);
  // console.log('stepsInfo', stepsInfo);

  const eachMonthDayObject = get(state, 'eachMonthDay', {});
  const eachMonthDayArray = Object.keys(eachMonthDayObject).map(
    (key, index) => {
      console.log(`eachMonthDayObject ${key}`, eachMonthDayObject[key]);
      return eachMonthDayObject[key];
    },
  );
  console.log('EachMonthDay obj', EachMonthDay);
  const EachMonthDay = eachMonthDayArray.map((arr, arrayIndex) => {
    return (
      <Block key={`arrayIndex-${arrayIndex}`}>
        {arr.map((item, itemIndex) => (
          <View key={`itemIndex-${itemIndex}`}>
            <Text>{item.sum}</Text>
            <Text>{item.type}</Text>
            <Text>{item.amount}</Text>
          </View>
        ))}
      </Block>
    );
  });

  return (
    <Wrapper>
      <Text>Result 22</Text>

      {EachMonthDay}
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
