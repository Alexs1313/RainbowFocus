import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/Stack';
import {StoreProvider} from './src/store/context';
import Toast from 'react-native-toast-message';
import {useEffect, useState} from 'react';
import Loader from './src/components/Loader';

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <StoreProvider>
        {loader ? <StackNavigation /> : <Loader />}
        <Toast position="top" topOffset={50} />
      </StoreProvider>
    </NavigationContainer>
  );
};

export default App;
