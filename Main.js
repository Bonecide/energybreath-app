import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store/store';
import { setDark } from './store/slices/themeSlice';
import MainPage from './pages/MainPage';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { setAuth, setUser } from './store/slices/userSlice';
import VideoPage from './pages/VideoPage';
import AudioPage from './pages/AudioPage';
import CoursesPage from './pages/CoursesPage';
import UserPage from './pages/UserPage';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Main() {
  
    const theme = useSelector((s) => s.theme.theme)
    const dispatch = useDispatch()
    const getStorage = async () => {
        let theme = await AsyncStorage.getItem("theme");
        let isAuth = await AsyncStorage.getItem('isAuth')
        let user = await AsyncStorage.getItem('user')
        if (theme === "dark") {
          dispatch(setDark());
        }
        if(JSON.parse(user)) {
          dispatch(setUser(JSON.parse(user)))
        }
        if (JSON.parse(isAuth)) {
            dispatch(setAuth())
        }
      };
      getStorage();
const isAuth = useSelector((s) => s.user.isAuth)
  if(!isAuth) {
    return(
      <Provider store={store}>
        <NavigationContainer >
        <StatusBar hidden/>
      <Stack.Navigator screenOptions={{
      headerShown : false
    }}>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='reg' component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
      </Provider>
    )
  }
  return (
     <NavigationContainer >
         <StatusBar hidden/>
      <Tab.Navigator  screenOptions={{
        
        tabBarShowLabel : false,
        headerShown : false,
        tabBarStyle : { 
            paddingTop : 20,
            paddingBottom : 20,
            borderTopLeftRadius : theme === 'dark' ? 0 : 20,
            borderTopRightRadius : theme === 'dark' ? 0 : 20,
            backgroundColor : theme === 'dark' ? '#1D093B' : 'white',
            borderWidth  : theme === 'dark' ? 0 : 1,
            borderTopWidth : theme === 'dark' ? 0 : 1,
            borderColor : '#E0E0E0',
            elevation : theme === 'light' ? 2 : 0,
            shadowColor :  theme === 'light' && 'rgba(0, 0, 0, 0.25)',
            shadowOffset : {height : 0, width : 0},
            shadowOpacity : theme ==='light' ? 0.7 : 0,
            shadowRadius : 6,
            height : 80,
         },

      }}>
        <Tab.Screen name='mainPage' options={{
          tabBarIcon : ({focused}) => {
            return(
            <View style={s(theme,focused).container}>
              {theme === 'dark'  ? (!focused ? <Image source={require('./assets/darkMain.png')}/> : <Image source={require('./assets/commonMain.png')}/>) : <Image source={require('./assets/LightMain.png')}/> }
            </View>
            )
          }
        }} component={MainPage}/>
        <Tab.Screen name='video' options={{
          tabBarIcon : ({focused}) => {
            return(
            <View style={s(theme,focused).container}>
              {theme === 'dark'  ? (!focused ? <Image source={require('./assets/darkVideo.png')}/> : <Image source={require('./assets/commonVideo.png')}/>) : <Image source={require('./assets/LightVideo.png')}/> }
            </View>
            )
          }
        }} component={VideoPage}/>
        <Tab.Screen name='audio' options={{
          tabBarIcon : ({focused}) => {
            return(
            <View style={s(theme,focused).container}>
              {theme === 'dark'  ? (!focused ? <Image source={require('./assets/DarkAudio.png')}/> : <Image source={require('./assets/commonAudio.png')}/>) : <Image source={require('./assets/LightAudio.png')}/> }
            </View>
            )
          }
        }} component={AudioPage}/>
         <Tab.Screen name='courses' options={{
          tabBarIcon : ({focused}) => {
            return(
            <View style={s(theme,focused).container}>
              {theme === 'dark'  ? (!focused ? <Image source={require('./assets/DarkCourses.png')}/> : <Image source={require('./assets/commonCourses.png')}/>) : <Image source={require('./assets/LightCourses.png')}/> }
            </View>
            )
          }
        }} component={CoursesPage}/>
        <Tab.Screen name='user' options={{
          tabBarIcon : ({focused}) => {
            return(
            <View style={s(theme,focused).container}>
              {theme === 'dark'  ? (!focused ? <Image source={require('./assets/DarkUser.png')}/> : <Image source={require('./assets/commonUser.png')}/>) : <Image source={require('./assets/LightUser.png')}/> }
            </View>
            )
          }
        }} component={UserPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const s = (theme,isActive) => StyleSheet.create({
  container : {
    width : 62,
    height : 62,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 100,
    backgroundColor : isActive && theme ==='light' ? '#E0E0E0' : 'transparent',

}
});
