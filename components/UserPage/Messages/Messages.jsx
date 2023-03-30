import UserLayout from "../UserLayout";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";

export default function Messages() {
  const messageData = [
    {
      id: 1,
      from: "Роман",
      lastMessage: "Привет",
      date: "01.01.0000",
      isChecked: false,
    },
    {
      id: 2,
      from: "Роман",
      lastMessage: "Привет",
      date: "01.01.0000",
      isChecked: true,
    },
    {
      id: 3,
      from: "Роман",
      lastMessage: "Привет",
      date: "01.01.0000",
      isChecked: true,
    },
    {
      id: 4,
      from: "Роман",
      lastMessage: "Привет",
      date: "01.01.0000",
      isChecked: true,
    },
    {
      id: 5,
      from: "Роман",
      lastMessage: "Привет",
      date: "01.01.0000",
      isChecked: true,
    },
  ];
  const theme = useSelector((s) => s.theme.theme);
  return (
    <UserLayout title={"СООБЩЕНИЯ"}>
      <View style={{marginTop : 30}}>
        {messageData.map((info, idx) => (
          <TouchableOpacity    key={info.id}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              
              style={s(theme).container}
              colors={
                info.isChecked
                  ? theme === "dark"
                    ? ["#8916FE", "#CF03FE"]
                    : ["white", "white"]
                  : ["#30F166", "#30F166"]
              }
            >
              <Image
                style={s(theme).image}
                source={require("../../../assets/Avatar.png")}
              />
              <View>
                <Text style={s(theme).from}>{info.from}</Text>
                <View style={s(theme).mainInfo}>
                  <Text
                    style={[
                      s(theme).lastMessage,
                      !info.isChecked && s(theme).container.notChecked,
                    ]}
                  >
                    {info.lastMessage}
                  </Text>
                  <Text style={s(theme).date}>{info.date}</Text>
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </UserLayout>
  );
}

const s = (theme) =>
  StyleSheet.create({
    container: {
      paddingVertical: 14,
      paddingHorizontal: 15,
      borderRadius: 20,
      borderColor: "#B3B3B3",
      borderWidth: theme === "light" ? 1 : 0,
      marginBottom: 30,
      flexDirection: "row",
      alignItems: "center",
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 999,
      resizeMode: "cover",
      marginRight: 15,
    },
    from: {
      fontFamily: "Bebas",
      fontSize: 24,
      color: theme === "light" ? "#0E2B4F" : "orange",
      marginBottom: 5,
    },
    mainInfo: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    lastMessage: {
      fontFamily: "Gilroy-700",
      fontSize: 14,
      color: theme === "light" ? "#B3B3B3" : "white",
    },
    notChecked: {
      color: "white",
    },
    date: {
      fontFamily: "Gilroy-400",
      color: theme === "light" ? "#909090" : "white",
      marginLeft: 85,
    },
  });
