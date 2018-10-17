import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const KeyBoardScroll = ({ children, ...otherProps }) => {
  return (
    <KeyboardAwareScrollView
      extraScrollHeight={20}
			keyboardShouldPersistTaps="always"
      contentContainerStyle={{flexGrow: 1}}
      enableResetScrollToCoords={true}
      enableOnAndroid={true}
      scrollEnabled={true}
      behavior={'height'}
      {...otherProps}
    >
      {children}
    </KeyboardAwareScrollView>
  );
}

export default KeyBoardScroll;
