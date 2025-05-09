import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';

const Settings = () => {
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [isEnabled, setIsEnabled] = useState(null);

  const navigation = useNavigation();

  const toggleNotifications = () =>
    setIsEnabledNotifications(previousState => !previousState);

  return (
    <View style={{flex: 1, backgroundColor: '#055426'}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={{marginHorizontal: 28}}>
        <View style={styles.notificationsContainer}>
          <View style={styles.settingWrap}>
            <Text style={styles.notificationsText}>Notifications</Text>
            <Switch
              onValueChange={toggleNotifications}
              value={isEnabled}
              style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
              trackColor={{true: '#34C759', false: 'grey'}}
              thumbColor={'#fff'}
            />
          </View>
          <View style={styles.settingWrap}>
            <Text style={styles.notificationsText}>Vibration</Text>
            <Switch
              onValueChange={toggleNotifications}
              value={isEnabled}
              style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
              trackColor={{true: '#34C759', false: 'grey'}}
              thumbColor={'#fff'}
            />
          </View>
          <View style={styles.settingWrap}>
            <Text style={styles.notificationsText}>Sound Effects</Text>
            <Switch
              onValueChange={toggleNotifications}
              value={isEnabled}
              style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
              trackColor={{true: '#34C759', false: 'grey'}}
              thumbColor={'#fff'}
            />
          </View>
          <View style={styles.settingWrap}>
            <Text style={styles.notificationsText}>Default Session Time</Text>
            <Switch
              onValueChange={toggleNotifications}
              value={isEnabled}
              style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
              trackColor={{true: '#34C759', false: 'grey'}}
              thumbColor={'#fff'}
            />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text>Session time</Text>
        </View>
      </View>
      <View style={{marginHorizontal: 85, marginTop: 94}}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Session', selectedSegment)}>
          <Text style={styles.buttonText}>Save time</Text>
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
  notificationsContainer: {
    width: '100%',
    paddingVertical: 11,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginTop: 32,
    marginBottom: 32,
    borderRadius: 12,
  },
  notificationsText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
  },
  settingWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 11,
    borderBottomColor: '#54545657',
  },
});

export default Settings;
