import {NavigationContainer} from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';

import Onboarding from './src/screen/stack/Onboarding';
import StackNavigation from './src/navigation/Stack';
import Loader from './src/components/Loader';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <Loader /> */}
    </NavigationContainer>
  );
};

export default App;
