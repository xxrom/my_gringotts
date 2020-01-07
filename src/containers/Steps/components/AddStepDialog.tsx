import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';

import { Dialog, LabelInput, LabelPicker } from '@common';

interface AddStepDialogProps {
  isShowedPopup: boolean;
  onTouchOutside: (val: boolean) => void;
  onSave: (amount: number, type: string) => void;
}

const typeList = [
  {
    label: 'fixed amount',
    value: 'fixedAmount',
  },
  {
    label: 'percent from sum',
    value: 'percentFromSum',
  },
  {
    label: 'repeat once',
    value: 'repeatOnce',
  },
];
const eachList = [
  {
    label: 'month day',
    value: 'monthDay',
  },
  {
    label: 'week day',
    value: 'weekDay',
  },
  {
    label: 'each day',
    value: 'eachDay',
  },
  {
    label: 'each week (Monday)',
    value: 'eachWeek',
  },
  {
    label: 'each year (01.01)',
    value: 'eachYear',
  },
];

const AddStepDialog = ({
  isShowedPopup,
  onTouchOutside,
  onSave,
}: AddStepDialogProps) => {
  const [amount, setAmount] = useState();
  const [type, setType] = useState(typeList[0].value);
  const [each, setEach] = useState(eachList[0].value);
  const [repeat, setRepeat] = useState();

  const onSaveInner = () => onSave({ amount, type, each, repeat });

  // isShowedPopup
  return (
    <Dialog
      isOpened={isShowedPopup}
      onTouchOutside={onTouchOutside}
      title={'Use Googles location service?'}
      onSave={onSaveInner}
      supportingText={'Supporting text'}>
      <View>
        <Text>Add new Step:</Text>
        <LabelInput
          label="Amount"
          placeholder="enter amount"
          value={amount}
          onChange={setAmount}
        />
        <LabelPicker
          label="Type"
          selectedValue={type}
          onChange={setType}
          list={typeList}
        />
        <LabelPicker
          label="Each"
          selectedValue={each}
          onChange={setEach}
          list={eachList}
        />
        <LabelInput
          label="Day/Month"
          placeholder="week day/month day/year month"
          value={repeat}
          onChange={setRepeat}
        />
      </View>
    </Dialog>
  );
};

export { AddStepDialog };
