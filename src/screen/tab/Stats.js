import {
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStore} from '../../store/context';
import {useEffect} from 'react';

const Stats = () => {
  const {focused, totalQuotes, selectedSegment} = useStore();

  useEffect(() => {
    console.log('useefect');
  });

  const initialColors = [
    '#CC73FF',
    '#FF5B5B',
    '#FFAA56',
    '#FFFB89',
    '#5DFF5D',
    '#61C1FF',
    '#5252FF',
  ];

  const convertToHoursAndMinutes = seconds => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return {hours, minutes};
  };

  const totalSeconds = focused.reduce((sum, seconds) => sum + seconds, 0);

  const totalTime = convertToHoursAndMinutes(totalSeconds);

  const onShare = async () => {
    try {
      await Share.share({
        message: `Focused time: ${totalTime.hours} hours ${totalTime.minutes} minutes ,
Recieved quotes: ${totalQuotes}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#055426'}}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Statistics</Text>
        </View>
        <View style={{marginHorizontal: 28}}>
          <Text style={styles.sectionText}>Most popular color:</Text>
          <View
            style={[
              styles.colorContainer,
              {backgroundColor: initialColors[selectedSegment]},
              selectedSegment === null && {
                backgroundColor: '#fff',
                borderRadius: 12,
              },
            ]}></View>
          <Text style={styles.sectionText}>Focused time:</Text>
          <View style={styles.sectionContainer}>
            <Text style={styles.secondaryText}>
              {totalTime.hours} hours {totalTime.minutes} minutes
            </Text>
          </View>
          <Text style={styles.sectionText}>Recieved quotes:</Text>
          <View style={styles.sectionContainer}>
            <Text style={styles.secondaryText}>{totalQuotes} quotes</Text>
          </View>
        </View>
        <View style={{marginHorizontal: 85, marginTop: 94, marginBottom: 140}}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => onShare()}>
            <Text style={styles.buttonText}>Share</Text>
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
  sectionText: {
    fontSize: 18,
    fontFamily: 'Inknut800',
    color: '#fff',
    marginTop: 21,
    marginBottom: 13,
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
  colorContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#FF5B5B',
    borderRadius: 12,
  },
  sectionContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: 'center',
  },
  secondaryText: {
    fontSize: 18,
    fontFamily: 'Inknut800',
    color: '#000',
    lineHeight: 30,
  },
});

export default Stats;
