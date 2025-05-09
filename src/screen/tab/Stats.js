import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Share, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Svg, {G, Path, Circle} from 'react-native-svg';

const Stats = () => {
  const [selectedSegment, setSelectedSegment] = useState(null);
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      await Share.share({
        message: 'helo',
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#055426'}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Statistics</Text>
      </View>
      <View style={{marginHorizontal: 28}}>
        <Text style={styles.sectionText}>Most popular color:</Text>
        <View style={styles.colorContainer}></View>
        <Text style={styles.sectionText}>Focused time:</Text>
        <View style={styles.sectionContainer}>
          <Text>fdff</Text>
        </View>
        <Text style={styles.sectionText}>Recieved quotes:</Text>
        <View style={styles.sectionContainer}>
          <Text>ffdff</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 85, marginTop: 94}}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => onShare()}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
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
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: 'center',
  },
});

export default Stats;
