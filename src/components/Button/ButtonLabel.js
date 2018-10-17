import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Keyboard
} from 'react-native';
import * as common from '../../configs/common';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  viewButton: {
    paddingRight: 24,
    paddingVertical: 8
  },
  disable: {
    opacity: 0.8
  },
  txtTitle: {
    fontSize: common.FONT_SIZE_CONTENT,
    fontWeight: common.FONT_WEIGHT_HEADER,
    color: common.TEXT_COLOR_ACTIVE,
    backgroundColor: 'transparent'
  },
  txtFirstTitle: {
    fontSize: common.FONT_SIZE_CONTENT,
    fontWeight: common.FONT_WEIGHT_HEADER,
    color: common.TEXT_COLOR_INACTIVE,
    backgroundColor: 'transparent'
  }
})

class ButtonLabel extends PureComponent<Props> {
  render() {
    const {
      disable,
      title,
      firstTitle,
      style,
      titleStyle,
      firstTitleStyle,
      onPress,
      textUnderline
    } = this.props;
    const Component = disable || !onPress ? View : TouchableOpacity;

    return (
      <View style={styles.container}>
        {
          firstTitle && (
            <Text style={[styles.txtFirstTitle, firstTitleStyle]}>
              {`${firstTitle} `}
            </Text>
          )
        }
        <Component
          style={[
            styles.viewButton,
            style,
            disable ? styles.disable : undefined,
            firstTitle ? undefined : { paddingLeft: 24 }
          ]}
          onPress={() => {
            Keyboard.dismiss()
            if (onPress) {
              onPress()
            }
          }}
        >
          <Text numberOfLines={1} style={[styles.txtTitle, titleStyle, textUnderline ? { textDecorationLine: 'underline' } : undefined]}>
            {title}
          </Text>
        </Component>
      </View>
    )
  }
}

ButtonLabel.defaultProps = {
  disable: false,
  onPress: undefined,
  style: null,
  titleStyle: null,
  firstTitle: null,
  textUnderline: false
}

interface Props {
  title?: string;
  firstTitle?: string;
  onPress?: () => void;
  disable?: boolean;
  textUnderline?: boolean;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  firstTitleStyle?: StyleProp<TextStyle>;
}

export default ButtonLabel;
