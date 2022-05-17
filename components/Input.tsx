import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {scaleWidth, scaleHeight, normalizeFont} from '../utils/responsive';

interface InputProps {
  title?: string;
  placeholder?: any;
  onChangeText?(): void;
  value?: any;
  editable?: boolean;
  autoCompleteType?: string;
  style?: object;
  onFocus?: any;
}

export const Input = (props: InputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <View
      style={[
        focus ? styles.inputContainer : styles.inputContainerFocus,
        {...props.style},
      ]}>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        style={focus ? styles.textInput : styles.textInputFocus}
        autoCapitalize="none"
        placeholderTextColor={focus ? '#F46262' : 'gray'}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginVertical: scaleHeight(10),
    width: scaleWidth(335),
    height: scaleHeight(75),
    maxHeight: scaleHeight(250),
    backgroundColor: '#FFFFFF',
    borderWidth: 4,
    borderColor: '#F46262',
    paddingHorizontal: scaleWidth(15),
  },
  inputContainerFocus: {
    alignItems: 'center',
    marginVertical: scaleHeight(10),
    width: scaleWidth(335),
    height: scaleHeight(75),
    maxHeight: scaleHeight(250),
    backgroundColor: '#FFFFFF',
    borderWidth: 4,
    borderColor: 'gray',
    paddingHorizontal: scaleWidth(15),
  },
  textInput: {
    marginTop: 3,
    justifyContent: 'center',
    lineHeight: scaleHeight(20),
    fontSize: normalizeFont(17),
    paddingTop: scaleHeight(20),
  },
  textInputFocus: {
    marginTop: 3,
    justifyContent: 'center',
    lineHeight: scaleHeight(20),
    fontSize: normalizeFont(17),
    paddingTop: scaleHeight(20),
  },
});
