import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  Alert,
} from 'react-native';
import Columns from './src/components/Columns';
import Bird from './src/components/Bird';

const App = () => {
  const [birdJump, setBirdJump] = useState(0);
  const [isColumn, setIsColumn] = useState<boolean>(true);
  const [firstColumn, setFirstColumn] = useState(0);
  const [secondColumn, setSecondColumn] = useState(0);
  const [score, setScore] = useState(0);
  const birdRef = useRef(birdJump);
  useEffect(() => {
    setTimeout(() => {
      const intervalId = setInterval(() => {
        if (
          330 - birdRef.current >= firstColumn &&
          330 - birdRef.current < 380
        ) {
          setScore(x => {
            return x + 1;
          });
        } else {
        }
      }, 5000);
      return () => clearInterval(intervalId);
    }, 2500);
  }, []);

  useEffect(() => {
    birdRef.current = birdJump;
  }, [birdJump]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsColumn(false);

      setTimeout(ms => {
        setIsColumn(true);
      }, 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const onPressScreen = () => {
    setBirdJump(x => x - 60);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('./src/assets/background2.jpg')}>
        <Pressable style={styles.gestureContainer} onPress={onPressScreen}>
          <Text style={styles.score}>{score}</Text>
          {isColumn ? (
            <Columns
              firstColumn={firstColumn}
              setFirstColumn={setFirstColumn}
              secondColumn={secondColumn}
              setSecondColumn={setSecondColumn}
            />
          ) : null}
          <Bird
            onPress={onPressScreen}
            value={birdJump}
            setValue={setBirdJump}
          />
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  gestureContainer: {
    flex: 1,
  },
  score: {
    position: 'absolute',
    color: 'white',
    fontSize: 50,
    top: 100,
    left: 200,
  },
});

/*

View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('./src/assets/background2.jpg')}>
        <GestureHandlerRootView style={styles.gestureContainer}>
          <PanGestureHandler onGestureEvent={onGesture}>
            <Columns />
            <Bird />
          </PanGestureHandler>
        </GestureHandlerRootView>
      </ImageBackground>
    </View>
*/
