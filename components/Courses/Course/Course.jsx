import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Layout from "../../Layout/Layout";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Days from "./Days/Days";
import Tasks from "./Tasks/Tasks";

export default function Course({ route, navigation }) {
  const theme = useSelector((s) => s.theme.theme);
  const [curDate, setCurDate] = useState();
  const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  useEffect(() => {
    const d = new Date();
    const n = d.getDay();
    setCurDate(days[n]);
  }, []);
  return (
    <>
      <Layout>
        {route.name != "me" && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={s(theme).goBackContainer}
          >
            <Text style={s(theme).goBack}>Назад</Text>
          </TouchableOpacity>
        )}
        <View style={s(theme).container}>
          <Text style={s(theme).title}>Курс Энергодыхания 1</Text>
          <Days setCurDate={setCurDate} curDate={curDate} />
          <Tasks />
        </View>
      </Layout>
    </>
  );
}

const s = (theme) =>
  StyleSheet.create({
    goBackContainer: {
      position: "absolute",
      zIndex: 9999,
      top:Platform.OS=== 'android' ? 0 : 30,
      left: 30,
    },
    goBack: {
      fontFamily: "Gilroy-400",
      fontSize: 20,
      color: theme === "light" ? "black" : "white",
    },
    title: {
      textAlign: "center",
      fontFamily: "Bebas",
      fontSize: 24,
      color: theme === "light" ? "#0E2B4F" : "orange",
    },
    container: {
      marginTop: 50,
      paddingHorizontal: 30,
    },
  });
