import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LogInContainer from "../components/LogIn/LogInContainer/LogInContainer";
import RegisterForm from "../UI/Form/RegisterForm/RegisterFrom";
import { Link } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setDark, setLight } from "../store/slices/themeSlice";

export default function Registration() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const changeTheme = () => {
    if (theme === "light") {
      dispatch(setDark());
    } else dispatch(setLight());
  };
  return (
    <LogInContainer without>
      <ScrollView bounces={false} style={{flex : 1}}>
      <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={-45}
          style={{ flex: 1 }}
        >
      <View style={s(theme).container}>
        <Text style={s(theme).text}>РЕГИСТРАЦИЯ</Text>
      </View>
      
       
          <RegisterForm theme={theme} />
        </KeyboardAvoidingView>
      </ScrollView>

      <Button onPress={changeTheme} title="СМЕНИТЬ ТЕМУ" />
      <Link style={s(theme).link} to={"/login"}>
        ВОЙТИ
      </Link>
    </LogInContainer>
  );
}
const s = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontFamily: "Bebas-light",
      fontSize: 42,
      textAlign: "center",
      color: theme === "dark" ? "white" : "black",
    },
    link: {
      fontFamily: "Bebas-light",
      textAlign: "center",
      fontSize: 30,
      marginTop: 30,
      marginBottom: 50,
      color: theme === "dark" ? "white" : "black",
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
    textDecorationColor: theme === "dark" ? "white" : "black"
    },
  });
