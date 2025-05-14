import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TimerPickerModal} from 'react-native-timer-picker';
import Toast from 'react-native-toast-message';

import {useStore} from '../../store/context';

const Settings = () => {
  const [showInput, setShowInput] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const {
    timeIsEnabled,
    setTimeIsEnabled,
    setSelectedTime,
    selectedTime,
    setSessionTime,
    setIsEnabledNotifications,
    isEnabledNotifications,
  } = useStore();

  const toggleNotifications = () =>
    setIsEnabledNotifications(previousState => !previousState);

  const switchSessionTime = () => {
    setTimeIsEnabled(previousState => !previousState);
    if (timeIsEnabled === false) {
      setSessionTime(15);
      setSelectedTime(15);
    }
  };

  const formatTime = ({minutes}) => {
    if (minutes !== undefined || minutes !== 0) {
      setSelectedTime(minutes.toString().padStart(2, '0'));
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#055426'}}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <View style={{marginHorizontal: 28}}>
          <View style={styles.notificationsContainer}>
            <View style={styles.settingWrap}>
              <Text style={styles.notificationsText}>Notifications</Text>
              <Switch
                onValueChange={toggleNotifications}
                value={isEnabledNotifications}
                style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
                trackColor={{true: '#34C759', false: 'grey'}}
                thumbColor={'#fff'}
              />
            </View>

            <View style={styles.settingWrap}>
              <Text style={styles.notificationsText}>Default Session Time</Text>
              <Switch
                onValueChange={switchSessionTime}
                value={timeIsEnabled}
                style={{transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
                trackColor={{true: '#34C759', false: 'grey'}}
                thumbColor={'#fff'}
              />
            </View>
          </View>

          {timeIsEnabled && (
            <View style={styles.sectionContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.notificationsText}>Session time:</Text>
                {!showInput && (
                  <TouchableOpacity
                    style={styles.timeContainer}
                    onPress={() => setShowPicker(true)}>
                    <Text style={styles.notificationsText}>
                      {selectedTime}:00
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
        </View>
        <View style={{marginHorizontal: 85, marginTop: 94, marginBottom: 140}}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => {
              setSessionTime(selectedTime);
              if (isEnabledNotifications) {
                Toast.show({
                  text1: `Session time successfully saved!`,
                });
              }
            }}>
            <Text style={styles.buttonText}>Save time</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TimerPickerModal
        visible={showPicker}
        setIsVisible={setShowPicker}
        // onDurationChange={pickedDuration => formatTime(pickedDuration)}
        modalTitle="Session time"
        onCancel={() => setShowPicker(false)}
        closeOnOverlayPress
        onConfirm={pickedDuration => {
          formatTime(pickedDuration);
          setShowPicker(false);
        }}
        use12HourPicker
        minuteLabel="min"
        hideHours={true}
        hideSeconds={true}
        styles={{
          pickerItem: {
            fontSize: 23,
            fontWeight: '400',
          },
          pickerLabel: {
            fontSize: 17,
            right: -20,
          },
          pickerLabelContainer: {
            width: 60,
          },
          pickerItemContainer: {
            width: 150,
          },
        }}
      />
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
    paddingHorizontal: 16,
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
  timeContainer: {
    backgroundColor: '#CFE9DA',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Settings;
