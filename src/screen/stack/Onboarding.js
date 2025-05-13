import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          {step === 1 && (
            <Image
              source={require('../../assets/images/onboardMain.png')}
              style={styles.image}
            />
          )}
          {step === 2 && (
            <Image
              source={require('../../assets/images/onboard2.png')}
              style={styles.image}
            />
          )}
          {step === 3 && (
            <Image
              source={require('../../assets/images/onboard3.png')}
              style={styles.image}
            />
          )}
          {step === 4 && (
            <Image
              source={require('../../assets/images/onboard4.png')}
              style={styles.image}
            />
          )}
          {step === 5 && (
            <Image
              source={require('../../assets/images/onboardMain.png')}
              style={styles.image}
            />
          )}
        </View>
      </ScrollView>
      {step === 1 && (
        <View style={styles.bottomSectionContainer}>
          <Text style={styles.title}>Welcome to Rainbow Focus</Text>
          <Text style={styles.description}>
            “Bring color into your daily focus.” Relax, energize, and refocus
            with just a few minutes a day.
          </Text>
          <View style={{marginHorizontal: 70, marginTop: 22}}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => setStep(step + 1)}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {step === 2 && (
        <View style={styles.bottomSectionContainer}>
          <Text style={styles.title}>Choose Your Color</Text>
          <Text style={styles.description}>
            “Each color holds power.” Pick the color that matches your mood or
            goal — calm, energy, balance, or inspiration.
          </Text>
          <View style={{marginHorizontal: 70, marginTop: 22}}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => setStep(step + 1)}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {step === 3 && (
        <View style={styles.bottomSectionContainer}>
          <Text style={styles.title}>Focus & Breathe</Text>
          <Text style={styles.description}>
            “Just breathe. Watch the color guide you.” Let the app help you stay
            focused or relax with smooth visuals and sound.
          </Text>
          <View style={{marginHorizontal: 70, marginTop: 22}}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => setStep(step + 1)}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {step === 4 && (
        <View style={styles.bottomSectionContainer}>
          <Text style={styles.title}>Build Your Rainbow</Text>
          <Text style={styles.description}>
            “Track your journey. One color at a time.” Complete sessions to
            build your rainbow and discover hidden affirmations.
          </Text>
          <View style={{marginHorizontal: 70, marginTop: 22}}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => setStep(step + 1)}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {step === 5 && (
        <View style={styles.bottomSectionContainer}>
          <Text style={styles.title}>Welcome to Rainbow Focus</Text>
          <Text style={styles.description}>
            “Bring color into your daily focus.” Relax, energize, and refocus
            with just a few minutes a day.
          </Text>
          <View style={{marginHorizontal: 70, marginTop: 22}}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('TabNav')}>
              <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#055426',
  },
  image: {width: '100%', marginTop: 70},
  imageContainer: {
    alignItems: 'center',
    marginBottom: 550,
  },
  bottomSectionContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 130,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  title: {
    fontSize: 24,
    color: '#055426',
    fontFamily: 'Inknut800',
    lineHeight: 30,
    textAlign: 'center',
    marginHorizontal: 78,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    marginHorizontal: 56,
    marginTop: 29,
  },
  button: {
    backgroundColor: '#F87B0D',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 55,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});

export default Onboarding;
