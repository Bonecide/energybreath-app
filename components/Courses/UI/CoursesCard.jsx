import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';
export default function CoursesCard({ data }) {
  const theme = useSelector((s) => s.theme.theme);
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Course')}
      style={{
        width: "100%",
        shadowColor: "rgba(0, 0, 0)",
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
      }}
    >
      <LinearGradient
        colors={theme === "dark" ? ["#8916FE", "#CF03FE"] : ["white", "white"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={s(theme).container}
      >
        <Image
          style={s(theme).image}
          source={require("../../../assets/newsBG/News2.png")}
        />
        <View style={s(theme).mainInfo}>
          <Text style={s(theme).title}>{data.title}</Text>
          <View style={s(theme).progressbar}>
            <Progress.Bar
              progress={data.progress / 100}
              width={200}
              height={10}
              borderRadius={20}
              borderWidth={0}
              unfilledColor={"white"}
              color={
                data.progress < 20
                  ? "red"
                  : data.progress > 90
                  ? "#30F166"
                  : "#FFB800"
              }
              
            />
          </View>
          <Text style={s(theme).progress}>Пройдено {data.progress}%</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const s = (theme) =>
  StyleSheet.create({
    container: {
      padding: 10,
      marginBottom: 30,
      borderRadius: 20,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
    },
    image: {
      width: '30%',
      height: 93,
      resizeMode: "cover",
      marginRight: 15,
      borderRadius: 20,
    },
    mainInfo: {
      alignItems: "center",
    },
    title: {
      fontFamily: "Bebas",
      fontSize: 24,
      color: theme === "light" ? "#0E2B4F" : "orange",
      marginBottom: 12,
    },
    progressbar: {
      elevation: 4,
      shadowColor: "black",
      shadowRadius: 4,
      shadowOffset: { x: 0, y: 0 },
      shadowOpacity: 0.25,
    },
    progress: {
      marginTop: 16,
      fontFamily: "Gilroy-400",
      fontSize: 18,
      color: theme === "light" ? "#0E2B4F" : "white",
    },
  });
