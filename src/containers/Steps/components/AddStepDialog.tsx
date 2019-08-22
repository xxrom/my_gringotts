import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';

import { Dialog, LabelInput, LabelPicker } from '@common';

interface AddStepDialogProps {
  isShowedPopup: boolean;
  onTouchOutside: (val: boolean) => void;
}

const AddStepDialog = ({
  isShowedPopup,
  onTouchOutside,
}: AddStepDialogProps) => {
  const [amount, setAmount] = useState();

  const typeList = [
    {
      label: 'RUB',
      value: 'rub',
    },
    {
      label: 'USD',
      value: 'usd',
    },
    {
      label: 'EUR',
      value: 'eur',
    },
  ];
  const [type, setType] = useState(typeList[0].value);

  // actionItems={[
  //   {
  //     text: 'Cancel',
  //     onPress: onTouchOutside,
  //   },
  //   {
  //     text: 'OK',
  //     onPress: onTouchOutside,
  //   },
  // ]}>
  return (
    <Dialog
      isOpened={isShowedPopup}
      onTouchOutside={onTouchOutside}
      title={'Use Googles location service?'}
      supportingText={
        'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
      }>
      <View>
        <Text>Inner text in dialog!!</Text>
        <Text>Inner text in dialog!!</Text>
        <Text>Inner text in dialog!!</Text>
        <Text>Inner text in dialog!!</Text>
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
      </View>
    </Dialog>
  );
};

export { AddStepDialog };
