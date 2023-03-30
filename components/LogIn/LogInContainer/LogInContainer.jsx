import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  Ellipse,
  Path,
} from "react-native-svg";
import { useSelector } from "react-redux";
import GradientText from './../../../UI/GradientText/GradientText';
export default function LogInContainer({ children, without }) {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      style={s(theme).root}
    >
      {theme === "dark" && (
        <Image
          style={s(theme).dark}
          source={require("../../../assets/DarkFon.png")}
        />
      )}
      {theme === "light" && (
        <ImageBackground
          source={require("../../../assets/BackgroundGradient.png")}
          style={s(theme).ImageBackground}
        >
          <Image
            style={s(theme).circles}
            source={require("../../../assets/lightCircles.png")}
          />
          <Text style={s(theme).title}>ДЫШИ</Text>
        </ImageBackground>
      )}
      {theme === "dark" && (
        <View style={s(theme).ImageBackground}>
          <Image
            style={s(theme).circles}
            source={require("../../../assets/darkCircles.png")}
          />
          <GradientText style={s(theme).gradientText} colors={['#00FFFF','#BD00FF']}>ДЫШИ</GradientText>
        </View>
      )}
      {theme === "light" ? (
        <View style={s(theme).LightLogo}>
          <Image source={require("../../../assets/logo.png")} />
        </View>
      ) : (
        <ImageBackground
          style={s(theme).DarkLogo}
          source={require("../../../assets/GradientEclipse.png")}
        >
          <Image source={require("../../../assets/logo.png")} />
        </ImageBackground>
      )}

      <View style={s(theme).children}>{children}</View>
    </ScrollView>
  );
}

const s = (theme) =>
  StyleSheet.create({
    dark: {
      position: "absolute",
      top: 0,
      left: 0,
    },
    root: {
      flex: 1,
      backgroundColor: theme === "light" ? "white" : "#1D093B",
      position: "relative",
    },
    content: {
      alignItems: "flex-start",
    },
    ImageBackground: {
      height: 318,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      resizeMode: "contain",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      overflow: "hidden",
    },
    title: {
      fontSize: 80,
      fontFamily: "Bebas-light",
      color: "white",
    },
    gradientText :{
      fontSize: 80,
      fontFamily: "Bebas-light",
    },

    LightLogo: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 300,
      borderColor: "#EAEAEA",
      borderWidth: 5,
      backgroundColor: "white",
      position: "absolute",
      width: 194,
      height: 194,
      top: 210,
    },
    DarkLogo: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 300,
      position: "absolute",
      width: 194,
      height: 194,
      top: 210,
    },
    circles: {
      position: "absolute",
      top: 40,
      resizeMode: "contain",
    },
    children: {
      flex: 1,
      marginTop: 123,
      paddingHorizontal: 50,
      width: "100%",
    },
  });
