import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';
import Stats from '../screen/tab/Stats';
import Home from '../screen/tab/Home';
import Reading from '../screen/tab/Reading';
import Settings from '../screen/tab/Settings';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarActiveTintColor: '#F87B0D',
        tabBarInactiveTintColor: '#055426',
      }}>
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.bgIcon}>
              <Image
                source={require('../assets/images/tab/stats.png')}
                style={{tintColor: color}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.bgIcon}>
              <Image
                source={require('../assets/images/tab/home.png')}
                style={{tintColor: color}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Reading"
        component={Reading}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.bgIcon}>
              <Image
                source={require('../assets/images/tab/reading.png')}
                style={{tintColor: color}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.bgIcon}>
              <Image
                source={require('../assets/images/tab/settings.png')}
                style={{tintColor: color}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#055426',
    borderWidth: 1,
    borderColor: '#fff',
    elevation: 1,
    borderTopWidth: 1,
    paddingTop: 14,

    height: 68,
    position: 'absolute',
    bottom: 59,
    marginHorizontal: 63,
    borderRadius: 12,
  },
  tabBarLabelStyle: {
    fontSize: 10,
    fontWeight: '600',
  },
  bgIcon: {
    backgroundColor: '#fff',
    borderRadius: 12,
    // width: 65,
    // height: 65,
    paddingTop: 6,
    paddingBottom: 22,
    paddingHorizontal: 13,
    alignItems: 'center',
  },
});

export default TabNav;
