import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {useNavigation} from '@react-navigation/native';

import {useStore} from '../../store/context';
import {quotes} from '../../data/quotes';

const Session = ({route}) => {
  const [isPlayingTimer, setIsPlayingTimer] = useState(true);
  const [currentItem, setCurrentItem] = useState(null);
  const {sessionTime, saveData, setTotalQuotes, totalQuotes} = useStore();
  const [receivedQuotes, setReceivedQuotes] = useState(totalQuotes);
  const [focusedTime, setFocusedTime] = useState(null);
  const progress = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const segmentIdx = route.params;

  const timerDuration = sessionTime * 60;
  const selectedQuote = quotes.find(quote => quote.id === segmentIdx + 1);

  useEffect(() => {
    pickRandomItem();
    startProgressBar();
  }, []);

  const startProgressBar = () => {
    progress.setValue(0);

    Animated.timing(progress, {
      toValue: 1,
      duration: 180000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      pickRandomItem();
      startProgressBar();
      setReceivedQuotes(prev => prev + 1);
    });
  };

  const stopProgress = () => {
    progress.stopAnimation();
  };

  const pickRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * selectedQuote.quotes.length);
    setCurrentItem(selectedQuote.quotes[randomIndex]);
  };

  const progressBarWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 120],
  });

  const renderTime = ({remainingTime}) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <View style={{gap: 30, alignItems: 'center'}}>
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>
            {`${minutes.toString().padStart(2, '0')}:${seconds
              .toString()
              .padStart(2, '0')}`}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.timerButton}
          onPress={() => {
            setIsPlayingTimer(!isPlayingTimer);
            if (isPlayingTimer) {
              SoundPlayer.pause();
            } else {
              SoundPlayer.resume();
            }
          }}>
          {isPlayingTimer ? (
            <Image source={require('../../assets/images/icons/pause.png')} />
          ) : (
            <Image source={require('../../assets/images/icons/start.png')} />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        style={{flex: 1}}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.headerWrap}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack(),
                    saveData(focusedTime),
                    stopProgress(),
                    setTotalQuotes(receivedQuotes);
                }}
                activeOpacity={0.7}>
                <Image source={require('../../assets/images/icons/back.png')} />
              </TouchableOpacity>

              <Text style={styles.headerText}>
                Focus Session: {selectedQuote.title.toUpperCase()}
              </Text>
            </View>
          </View>
          <View
            style={{marginHorizontal: 20, alignItems: 'center', marginTop: 18}}>
            <Text>🔥</Text>
            <Text style={styles.timerTitle}>
              “Lock in. No hesitation — just bold movement.”
            </Text>
            <CountdownCircleTimer
              isPlaying={isPlayingTimer}
              size={300}
              isGrowing={true}
              strokeWidth={25}
              rotation="counterclockwise"
              trailStrokeWidth={25}
              duration={timerDuration}
              trailColor="#50915C"
              onUpdate={remainingTime =>
                setFocusedTime(sessionTime * 60 - remainingTime)
              }
              colors={['#fff']}>
              {renderTime}
            </CountdownCircleTimer>

            <View style={styles.quoteContainer}>
              <View style={styles.containerProgress}>
                <View style={styles.progressBarContainer}>
                  <Animated.View
                    style={[styles.progressBar, {width: progressBarWidth}]}
                  />
                </View>

                <Text style={styles.itemText}>Quote</Text>
                <Text style={styles.quoteText}>{currentItem}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#055426',
  },
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  header: {
    paddingTop: 100,
    paddingBottom: 34,
    backgroundColor: '#0E6934',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Inknut800',
    color: '#fff',
    marginLeft: 15,
  },
  timerTitle: {
    fontSize: 22,
    fontFamily: 'Inknut400',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 30,
    marginTop: 5,
    marginBottom: 38,
  },
  timerContainer: {
    paddingHorizontal: 23,
    paddingVertical: 18,
    backgroundColor: '#fff',
    borderRadius: 500,
    marginTop: 20,
  },
  timerText: {
    fontSize: 30,
    fontFamily: 'Inknut400',
    color: '#FF5B5B',
    textAlign: 'center',
    lineHeight: 30,
  },
  timerButton: {
    width: 52,
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteContainer: {
    paddingHorizontal: 40,
    paddingTop: 16,
    paddingBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 23,
    marginBottom: 40,
  },
  containerProgress: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontFamily: 'Inknut400',
    marginBottom: 10,
    marginTop: 10,
    color: '#FF5B5B',
  },
  quoteText: {
    fontSize: 14,
    fontFamily: 'Inknut400',
    color: '#000',
  },
  progressBarContainer: {
    height: 6,
    width: '118',
    marginHorizontal: 90,
    backgroundColor: '#64B774',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#1A5425',
  },
});

export default Session;
