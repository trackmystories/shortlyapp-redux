import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Input, Button} from '.';

//SVG Assets
import ShapeSvg from '../assets/ShapeSvg';

type ShortenItProps = {
  onChangeText?: any;
  onPress?: () => void;
  title?: string;
  style?: object;
  onFocus: any;
};

export const ShortenLink = (props: ShortenItProps) => {
  return (
    <>
      <Card style={styles.card}>
        <View style={styles.position}>
          <ShapeSvg />
        </View>
        <View style={{top: -50}}>
          <Input
            placeholder="Please add a link here"
            onChangeText={props.onChangeText}
            onFocus={props.onFocus}
          />
        </View>

        <Button
          onPress={props.onPress}
          titleStyle={{fontFamily: 'Poppins-Bold'}}
          style={styles.btn}
          title={props.title}
        />
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3B3054',
  },
  btn: {
    width: '100%',
    top: -50,
  },
  position: {
    position: 'relative',
    zIndex: -10,
    bottom: -28,
    left: 100,
  },
});
