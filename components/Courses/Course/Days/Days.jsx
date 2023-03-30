import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";

export default function Days({ curDate, setCurDate }) {
  const theme = useSelector((s) => s.theme.theme);

  const days = ["пн", "вт", "чт", "ср", "пт", "сб", "вс"];
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={s(theme).container}>
      {days.map((info, idx) => {
        if (info === curDate) {
          return (
            <View key={info} style={s(theme).Active}>
              <LinearGradient
                style={s(theme).gradient}
                colors={
                  theme === "dark"
                    ? ["#8916FE", "#CF03FE"]
                    : ["#0E2B4F", "#0E2B4F"]
                }
              />

              <View style={s(theme).ActiveCircle}>
                <Text style={s(theme).day}> {idx + 1}</Text>
              </View>
              <Text style={s(theme).ActiveDate}>{info}</Text>
            </View>
          );
        } else {
          return (
            <TouchableOpacity
             
              key={info}
              onPress={() => setCurDate(info)}
            >
              <View style={s(theme).notActive}>
                <View style={s(theme).notActiveCircle}>
                  <Text style={s(theme).day}> {idx + 1}</Text>
                </View>
                <Text style={s(theme).notActiveDate}>{info}</Text>
              </View>
            </TouchableOpacity>
          );
        }
      })}
    </ScrollView>
  );
}

const s = (theme) =>
  StyleSheet.create({
    container: {
      paddingTop: 30,
      height : 200,
    },
    notActive: {
      marginRight: 15,
      alignItems: "center",
    },
    Active: {
      marginRight: 15,
      alignItems: "center",
      position: "relative",
    },
    notActiveCircle: {
      width: 60,
      height: 60,
      borderRadius: 40,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "rgba(0, 0, 0)",
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 4,
    },
    ActiveCircle: {
      width: 60,
      height: 60,
      borderRadius: 40,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "rgba(0, 0, 0)",
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 4,
    },
    day: {
      fontFamily: "Gilroy-400",
      fontSize: 18,
      marginRight: 3,
      marginTop: 2,
      color: "#393939",
    },
    notActiveDate: {
      marginTop: 10,
      fontFamily: "Gilroy-400",
      fontSize: 14,
      color: theme === "light" ? "#B3B3B3" : "white",
    },
    ActiveDate: {
      marginTop: 10,
      fontFamily: "Gilroy-400",
      fontSize: 14,
      color: "white",
    },
    gradient: {
      position: "absolute",
      zIndex: 0,
      width: 60,
      height: 112,
      top: 0,
      borderRadius: 50,
    },
  });
