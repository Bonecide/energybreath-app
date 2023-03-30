import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function TaskCard({ info }) {
  const [isComplete, setIsComplete] = useState(info.isComplete);
  const theme = useSelector((s) => s.theme.theme);
  return (
    <TouchableOpacity onPress={() => setIsComplete(!isComplete)} style={s(theme).root}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={s(theme).container}
        colors={theme === "dark" ? ["#8916FE", "#CF03FE"] : ["white", "white"]}
      >
        <Image source={require("../../../../assets/Water.png")} />
        <View style={s(theme).mainInfo}>
          <Text style={s(theme).title}>{info.title}</Text>
          <Text style={s(theme).body}>{info.body}</Text>
        </View>
      </LinearGradient>
      <View style={s(theme).isComplete}>
        {isComplete && (
          <Image
            style={s(theme).image}
            source={require("../../../../assets/CompleteTask.png")}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const s = (theme) =>
  StyleSheet.create({
    container: {
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 15,
      paddingRight: 20,
      width: "100%",

      borderRadius: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    root: {
      marginTop: 30,
      elevation: 4,
      shadowColor: "black",
      shadowOpacity: 0.25,
      shadowOffset: { x: 0, y: 0 },
      shadowRadius: 4,
      width: "100%",
      overflow: "visible",
      position: "relative",
    },
    mainInfo: {
      marginLeft: 15,
    },
    title: {
      fontFamily: "Gilroy-700",
      color: theme === "light" ? "#393939" : "white",
      fontSize: 16,
    },
    body: {
      marginTop: 5,
      fontFamily: "Gilroy-400",
      fontSize: 16,
      color: theme === "light" ? "#393939" : "white",
    },
    isComplete: {
      position: "absolute",
      top: 10,
      right: 10,
      width: 21,
      height: 21,
      borderRadius: 999,
      elevation: 4,
      shadowColor: "black",
      shadowOpacity: theme === "light" ? 0.25 : 0,
      shadowOffset: { x: 0, y: 0 },
      shadowRadius: 4,
      borderColor: "white",
      borderWidth: 2,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginLeft: 10,
      marginBottom: 10,
    },
  });
