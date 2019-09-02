import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { calculate } from './lib';
import { StepProps } from '@containers/Steps';
import { data } from '@helper';

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
  console.log('render Result');

  // const stepsInfo: StepsInfoProps = calculate();

  data.getSteps().then(res => {
    calculate(res);
  });
  // console.log('stepsInfo', stepsInfo);

  return (
    <Fragment>
      <Text>Result 2</Text>
    </Fragment>
  );
};

export { Result };
