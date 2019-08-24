import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Button,
} from 'react-native';
import styled, { css } from 'styled-components/native';

interface DialogProps {
  isOpened: boolean;
}
const Dialog = (props: DialogProps): React.ReactElement | null => {
  const { isOpened, onTouchOutside, children } = props;
  console.log('isOpened', isOpened);
  return !isOpened ? null : (
    <Wrapper visible={isOpened} animationType="slide">
      <Content>
        <View>
          <Text>Dialog!</Text>
          {children}
        </View>
        <Button
          title="Add"
          onPress={() => {
            console.log('hide!');
            onTouchOutside();
          }}
        />
      </Content>
    </Wrapper>
  );
};

export { Dialog };

// TODO: Погуглить как  css  прокидывать в СК
// const hideCss = css`
//   && {
//     display: none;
//     background-color: blue;
//     border: 1px solid green;
//   }
// `;

const Wrapper = styled(Modal)`
  position: absolute;
  justify-content: center;
  align-items: center;
`;
const Content = styled(View)`
  flex: 1;
  justify-content: space-between;
  padding: 10%;
  background-color: #00000011;
`;
