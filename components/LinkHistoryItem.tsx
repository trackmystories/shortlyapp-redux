import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from '.';
import {scaleHeight, normalizeFont} from '../utils/responsive';

//SVG Assets
import DelSvg from '../assets/DelSvg';

type LinkHistoryItemProps = {
  title?: string;
  placeholder?: any;
  onChangeText?(): void;
  value?: any;
  editable?: boolean;
  autoCompleteType?: string;
  onPress?: () => void;
  delete?: () => void;
  children?: JSX.Element;
  longUrl?: string;
  shortUrl?: string;
  key?: any;
};

export const LinkHistoryItem = ({children, ...props}: LinkHistoryItemProps) => {
  return (
    <>
      <Card style={styles.container}>
        <View key={props.key} style={styles.inputContainer}>
          <View style={styles.row}>
            <View>
              <Text style={styles.longUrl}>{props.longUrl}</Text>
            </View>
            <TouchableOpacity onPress={props.delete}>
              <DelSvg />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <View style={styles.shtlnkContainer}>
            <Text style={styles.shtlnkText}>{props.shortUrl}</Text>
          </View>
        </View>
        {children}
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 250,
    borderRadius: 8,
  },
  inputContainer: {
    marginVertical: scaleHeight(10),
    width: '100%',
    height: scaleHeight(75),
    maxHeight: scaleHeight(250),
    backgroundColor: 'white',
    borderRadius: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  textInput: {
    width: '60%',
    marginTop: 3,
    justifyContent: 'center',
    lineHeight: scaleHeight(20),
    fontSize: normalizeFont(17),
    padding: 0,
  },
  line: {
    marginTop: 20,
    borderWidth: 0.5,
    borderStyle: 'dashed',
  },
  shtlnkContainer: {
    marginVertical: 25,
    fontSize: 17,
    lineHeight: 22,
  },
  shtlnkText: {
    color: '#2ACFCF',
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    lineHeight: 22,
  },
  longUrl: {
    color: '#35323E',
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    lineHeight: 22,
  },
});
