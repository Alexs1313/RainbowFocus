import {createStackNavigator} from '@react-navigation/stack';
import TabNav from './TabNav';
import Onboarding from '../screen/stack/Onboarding';
import Session from '../screen/stack/Session';
import ArticleCard from '../components/ArticleCard';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="Session" component={Session} />
      <Stack.Screen name="ArticleCard" component={ArticleCard} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
