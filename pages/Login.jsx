import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LogInContainer from "../components/LogIn/LogInContainer/LogInContainer";
import LoginForm from "../UI/Form/LoginForm/LoginForm";
import { Link } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setDark, setLight } from "../store/slices/themeSlice";
export default function Login() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const changeTheme = () => {
    if (theme === "light") {
      dispatch(setDark());
    } else dispatch(setLight());
  };

  return (
    <ScrollView bounces={false}>
      <KeyboardAvoidingView
        enabled={false}
        behavior="position"
        style={{ flex: 1 }}
      >
        <LogInContainer>
          <View style={s(theme).container}>
            <Text style={s(theme).text}>ВХОД</Text>
          </View>

          <LoginForm theme={theme} />

          <Button title="Изменить тему" onPress={changeTheme} />
          <Link style={s(theme).link} to={"/reg"}>
            РЕГИСТРАЦИЯ
          </Link>
        </LogInContainer>
      </KeyboardAvoidingView>
    </ScrollView>
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
      color: theme === "dark" ? "white" : "black",
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: theme === "dark" ? "white" : "black",
      marginBottom: 40,
    },
  });
