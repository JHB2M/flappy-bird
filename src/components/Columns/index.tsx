import React, {useEffect, useState} from 'react';
import {Text, Image, View, StyleSheet, ImageBackground} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
const Columns = ({
  firstColumn,
  setFirstColumn,
  secondColumn,
  setSecondColumn,
}: any) => {
  const progress = useSharedValue(410);
  useEffect(() => {
    let min = 270;
    let max = 410;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random);
    setFirstColumn(random);
    setSecondColumn(640 - random);
    progress.value = withTiming(-60, {duration: 5000});
  }, []);
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: progress.value}],
    };
  });
  return (
    <Animated.View style={[styles.container, , rStyle]}>
      <Animated.View
        style={[styles.pipe, {height: firstColumn}]}>
            <ImageBackground style ={styles.image} source={require('../../assets/pipe.png')}/>

        </Animated.View>

      <Animated.View
        style={[styles.pipe, {height: secondColumn}]}>
            <ImageBackground style ={styles.image} source={require('../../assets/pipe.png')}/>
        </Animated.View>
    </Animated.View>
  );
};

export default Columns;
// <ImageBackground style ={styles.column} source={require('../../assets/pipe.png')}/>

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 730,
    justifyContent: 'space-between',
    width: 40,
  },
  pipe: {

    width: 40,
  },
  image: {

    flex: 1,
    resizeMode: 'repeat',
  },
});
