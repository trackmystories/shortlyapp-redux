import React from 'react';
import {StyleSheet, Text, TextStyle, TouchableOpacity} from 'react-native';
import {normalizeFont, scaleHeight} from '../utils/responsive';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  textStyle?: TextStyle;
  titleStyle?: any;
  disable?: boolean;
  style?: any;
};

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={props.onPress}
      disabled={props.disable}
      style={[
        styles.button,
        props.disable ? styles.buttonDisabled : null,
        {...props.style},
      ]}>
      <Text style={[styles.title, {...props.titleStyle}]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#2ACFCF',
    marginVertical: scaleHeight(30),
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleHeight(40),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.04,
    shadowRadius: 10.34,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  title: {
    color: '#fff',
    fontSize: normalizeFont(15),
    textTransform: 'uppercase',
  },
});
