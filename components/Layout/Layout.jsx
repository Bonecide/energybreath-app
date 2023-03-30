import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Header from "./Header/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout({ children, without, videoPage }) {
  const theme = useSelector((s) => s.theme.theme);

  if (!without) {
    return (
      <ScrollView bounces={false} style={s(theme, videoPage).container}>
        <ImageBackground
          style={s(theme, videoPage).bg}
          source={
            theme === "light"
              ? require("../../assets/LightFon.png")
              : require("../../assets/DarkFon.png")
          }
        >
          <SafeAreaView style={{ flex: 1 }}>
            <Header videoPage={videoPage} />

            {children}
          </SafeAreaView>
        </ImageBackground>
      </ScrollView>
    );
  }
  return (
    <ScrollView bounces={true} style={s(theme, videoPage).container}>
      <ImageBackground
        style={s(theme, videoPage).bg}
        source={
          theme === "light"
            ? require("../../assets/LightFon.png")
            : require("../../assets/DarkFon.png")
        }
      >
        {children}
      </ImageBackground>
    </ScrollView>
  );
}

const s = (theme, videoPage) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "dark" ? "#1D093B" : "white",
      minHeight: "100%",
    },
    bg: {
      flex: 1,
      minHeight: "130%",
      height: '100%'
    },
  });
