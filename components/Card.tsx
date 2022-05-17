import React, {forwardRef} from 'react';
import {StyleSheet, Dimensions, Animated, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface CardProps {
  style?: object;
  children: JSX.Element;
}

export const Card = forwardRef((props: CardProps, ref) => {
  return (
    <Animated.View style={[styles.container, {...props.style}]} ref={ref}>
      {props.children}
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    backgroundColor: 'white',
    borderRadius: 0,
    padding: 20,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 2,
    height: windowHeight / 3,
  },
});
