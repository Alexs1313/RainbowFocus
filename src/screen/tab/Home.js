import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {G, Path, Circle} from 'react-native-svg';
import Toast from 'react-native-toast-message';

import {quotes} from '../../data/quotes';
import {useStore} from '../../store/context';
import Orientation from 'react-native-orientation-locker';

const Home = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const navigation = useNavigation();
  const {isEnabledNotifications, selectedSegment, setSelectedSegment} =
    useStore();

  useEffect(() => {
    Orientation.unlockAllOrientations();
  }, []);

  const size = 300;
  const radius = size / 2;
  const innerRadius = radius - 10;
  const sweepAngle = 360 / 7 - 4;
  const gapAngle = 4;
  const initialColors = [
    '#CC73FF',
    '#FF5B5B',
    '#FFAA56',
    '#FFFB89',
    '#5DFF5D',
    '#61C1FF',
    '#5252FF',
  ];

  const calculateSlicePath = (startAngle, sweepAngle) => {
    const x1 = 151 + 148 * Math.cos((Math.PI / 180) * startAngle);
    const y1 = 151 + 148 * Math.sin((Math.PI / 180) * startAngle);

    const x2 =
      151 + 148 * Math.cos((Math.PI / 180) * (startAngle + sweepAngle));
    const y2 =
      151 + 148 * Math.sin((Math.PI / 180) * (startAngle + sweepAngle));

    const largeArc = sweepAngle > 180 ? 1 : 0;

    return `M${radius},${radius} 
                L${x1},${y1} 
                A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} 
                Z`;
  };

  const selectedQuote = quotes.find(quote => quote.id === selectedSegment + 1);

  return (
    <View style={{flex: 1, backgroundColor: '#055426'}}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Choose Your Color of the Day</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.wheelTitle}>
            Tap on colors to see their meanings
          </Text>
          <Svg width={310} height={310}>
            <G>
              {initialColors.map((color, index) => {
                const startAngle = index * (sweepAngle + gapAngle); // Add gap for each segment
                const path = calculateSlicePath(startAngle, sweepAngle);

                const isSelected = selectedSegment === index;

                return (
                  <Path
                    key={index}
                    d={path}
                    fill={color}
                    stroke={isSelected ? '#fff' : 'none'}
                    strokeWidth={isSelected ? 4 : 0}
                    strokeLinejoin="round"
                    onPress={() => {
                      setSelectedSegment(index), setIsDisabled(true);
                      if (isEnabledNotifications) {
                        Toast.show({
                          text1: `Session selected!`,
                        });
                      }
                    }}
                  />
                );
              })}
            </G>

            <Circle
              cx={radius}
              cy={radius}
              r={innerRadius / 3.5}
              fill="#FFFFFF"
            />
          </Svg>
        </View>

        <View style={{marginHorizontal: 40}}>
          {isDisabled && (
            <View style={styles.sessionContainer}>
              <View
                style={[
                  styles.colorContainer,
                  {backgroundColor: initialColors[selectedSegment]},
                ]}
              />
              <Text style={styles.sessionText}>{selectedQuote.title}</Text>
            </View>
          )}
        </View>

        <View style={[styles.btnContainer, {marginTop: 10, marginBottom: 140}]}>
          <TouchableOpacity
            disabled={!isDisabled}
            style={[
              styles.button,
              !isDisabled && {backgroundColor: '#F87B0D33'},
            ]}
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Session', selectedSegment);
            }}>
            <Text style={styles.buttonText}>Start session</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 100,
    paddingBottom: 34,
    backgroundColor: '#0E6934',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Inknut800',
    color: '#fff',
    marginHorizontal: 40,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    margin: 20,
  },
  wheelTitle: {
    fontSize: 18,
    fontFamily: 'Inknut400',
    color: '#fff',
    marginHorizontal: 40,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#F87B0D',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  sessionContainer: {
    backgroundColor: '#fff',
    paddingVertical: 17,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sessionText: {
    fontSize: 16,
    fontFamily: 'Inknut400',
    lineHeight: 30,
    color: '#000',
  },
  colorContainer: {
    width: '30%',
    height: 12,
    backgroundColor: 'red',
    borderRadius: 12,
    marginBottom: 5,
  },
  btnContainer: {
    marginHorizontal: 85,
    marginTop: 94,
  },
});

export default Home;
