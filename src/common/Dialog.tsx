import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

interface DialogProps {
  isOpened: boolean;
}
const Dialog = ({
  isOpened,
  onTouchOutside,
}: DialogProps): React.ReactElement | null => {
  return isOpened ? (
    <Wrapper
      onPress={() => {
        console.log('wrapper onpress');
        onTouchOutside();
      }}>
      <Content>
        <Text>Dialog!</Text>
      </Content>
    </Wrapper>
  ) : null;
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

const Wrapper = styled(TouchableOpacity)`
  position: absolute;
  top: -50;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  /* TODO: ??? => elevation: 20; */
  justify-content: center;
  align-items: center;
  background-color: #00000033;
`;
const Content = styled(View)`
  flex: 1;
  width: 80%;
  padding: 10px;
  margin: 20px;
  background-color: white;
`;
