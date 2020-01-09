import React, { Fragment, useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import { LabelInput, LabelPicker } from '@common';
import { data } from '@helper';

const Parameters = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [intervalDays, setIntervalDays] = useState();
  const [initSum, setInitSum] = useState();
  useEffect(() => {
    data.getParams().then(res => {
      console.log('get params', res);
      const {
        startDate = '',
        endDate = '',
        intervalDays = '',
        initSum = '',
      } = res;

      setStartDate(startDate);
      setEndDate(endDate);
      setIntervalDays(intervalDays);
      setInitSum(initSum);
    });
  }, []);
  useEffect(() => {
    const sendObj = {
      startDate,
      endDate,
      intervalDays,
      initSum,
    };
    data.storeParams(sendObj);
  }, [startDate, endDate, intervalDays, initSum]);
  console.log('render Parameters');
  return (
    <Wrapper>
      <Text>Initial Parameters:</Text>
      <LabelInput
        label="Start date"
        placeholder="01.01.2019"
        value={startDate}
        onChange={setStartDate}
      />
      <LabelInput
        label="End date"
        placeholder="01.01.2021"
        value={endDate}
        onChange={setEndDate}
      />
      <LabelInput
        label="Interval days"
        placeholder="101"
        value={intervalDays}
        onChange={setIntervalDays}
      />
      <LabelInput
        label="Initial sum"
        placeholder="1000"
        value={initSum}
        onChange={setInitSum}
      />
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  padding: 10px;
`;

export { Parameters };
