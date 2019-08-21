import React from 'react';
import { Dialog } from '@common';

interface AddStepDialogProps {
  isShowedPopup: boolean;
  onTouchOutside: (val: boolean) => void;
}

const AddStepDialog = ({
  isShowedPopup,
  onTouchOutside,
}: AddStepDialogProps) => {
  return (
    <Dialog
      isOpened={isShowedPopup}
      onTouchOutside={onTouchOutside}
      title={'Use Googles location service?'}
      supportingText={
        'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
      }
      actionItems={[
        {
          text: 'Cancel',
          onPress: onTouchOutside,
        },
        {
          text: 'OK',
          onPress: onTouchOutside,
        },
      ]}
    />
  );
};

export { AddStepDialog };
