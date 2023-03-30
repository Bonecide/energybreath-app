
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Main from './Main';

SplashScreen.preventAutoHideAsync();
export default function App() {
  
  const [fontsLoaded,error] = useFonts({
    'Bebas': require('./assets/fonts/BebasNeueRegular.ttf'),
    'Bebas-light' : require('./assets/fonts/BebasNeueLight.ttf'),
    'Gilroy-700' : require('./assets/fonts/Gilroy-Bold.ttf'),
    'Gilroy-600' : require('./assets/fonts/Gilroy-Semibold.ttf'),
    'Gilroy-500' : require('./assets/fonts/Gilroy-Medium.ttf'),
    'Gilroy-400' : require('./assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-300' : require('./assets/fonts/Gilroy-Light.ttf'),
    'Gilroy-200' : require('./assets/fonts/Gilroy-UltraLight.ttf'),
    'Gilroy-100' : require('./assets/fonts/Gilroy-Thin.ttf'),

  });

  
    if (fontsLoaded) {
       SplashScreen.hideAsync();
    }
    else {
      return null
    }

    return(
      <Provider store={store}>
        <Main/>
      </Provider>
    )

}
