import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

//SVG Assets
import IllustrationSvg from '../assets/IllustrationSvg';

const windowWidth = Dimensions.get('window').width;

type GetStartedProps = {
  title: string;
  getStarted: string;
};

export const GetStarted = (props: GetStartedProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topTextContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <IllustrationSvg />
        <View style={styles.bottomTextContainer}>
          <Text style={styles.bold}>{props.getStarted}</Text>
          <Text style={styles.standard}>Paste your first link into</Text>
          <Text style={styles.standard}>the field to shorten it</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    alignItems: 'center',
  },
  topTextContainer: {
    margin: 20,
  },
  bottomTextContainer: {
    alignItems: 'center',
    marginVertical: 25,
  },
  title: {
    fontWeight: 'bold',
    color: '#35323E',
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#35323E',
    lineHeight: 35,
    fontFamily: 'Poppins-Bold',
  },
  standard: {
    fontSize: 17,
    color: '#35323E',
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
});
