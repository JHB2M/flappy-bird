import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Bird = ({
  onPress,
  value,
  setValue,
}: {
  onPress: () => void;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}) => {
  const jump = useSharedValue(0);

  useEffect(() => {
    jumpp();
  }, [value]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue(x => x + 15);
    }, 30044);
    return () => clearInterval(intervalId);
  }, []);

  const jumpp = () => {
    jump.value = withTiming(value, {duration: 700});
  };

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: jump.value}],
    };
  });

  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Image style={styles.bird} source={require('../../assets/bird.png')} />
    </Animated.View>
  );
};

export default Bird;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 330,
    left: 150,
  },
  bird: {
    width: 50,
    height: 50,
  },
});
