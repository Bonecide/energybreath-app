import { Image, Platform, Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Title from "../../../UI/Text/Title";
import { useSelector } from "react-redux";
import MyPublications from "./MyPublications/MyPublications";
import LikedPublications from "./LikedPublications/LikedPublications";
import { useNavigation } from '@react-navigation/native';

export default function Publications() {
  const theme = useSelector((s) => s.theme.theme);
  const navigation = useNavigation()
  return (
    <View style={s(theme).container}>
      <Title>Публикации</Title>

      <Pressable onPress={() => navigation.navigate('createPublic')} style={s(theme).createNew}>
        <Image
          style={s(theme).image}
          source={require("../../../assets/Avatar.png")}
        />
        <Text style={s(theme).createNewText}>
          Расскажите о ваших достижениях
        </Text>
      </Pressable>
      <MyPublications />
      <LikedPublications />
    </View>
  );
}

const s = (theme) =>
  StyleSheet.create({
    container: {
      marginTop: 30,
    },
    createNew: {
      marginTop: 30,
      paddingBottom: 30,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottomColor: "#B3B3B3",
      borderBottomWidth: 1,
    },
    image: {
      width: 50,
      height: 50,
      resizeMode: "cover",
      borderRadius: 999,
    },
    createNewText: {
      fontFamily: "Gilroy-400",
      fontSize: Platform.OS==='ios' ? 18 : 15,
      color: "#B3B3B3",
    },
  });
