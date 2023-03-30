import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../../Layout/Layout";
import { useSelector } from "react-redux";
import CommonButton from "../../../UI/Buttons/CommonButton";
import { useNavigation } from "@react-navigation/native";

export default function CheckPublication({ data, setIsVisible }) {
  const theme = useSelector((s) => s.theme.theme);
  const navigation = useNavigation();
  return (
    <Layout>
      <Text style={s(theme).title}>{data?.title?.toUpperCase()}</Text>
      <Text style={[s(theme).text, s(theme).subtitle]}>{data?.subtitle}</Text>
      {data.image && (
        <Image style={s(theme).image} source={{ uri: data?.image }} />
      )}
      <Text style={[s(theme).text, s(theme).body]}>{data.body}</Text>
      <TouchableOpacity onPress={() => setIsVisible(false)}>
        <Text style={s(theme).redact}>Редактировать публикацию</Text>
      </TouchableOpacity>
      <CommonButton
        onPress={() => navigation.navigate("me")}
        style={{ alignSelf: "center", marginTop: 69, marginBottom: 50 }}
      >
        Опубликовать
      </CommonButton>
    </Layout>
  );
}

const s = (theme) =>
  StyleSheet.create({
    text: {
      color: theme === "light" ? "#393939" : "white",
      fontFamily: "Gilroy-400",
      paddingHorizontal: 50,
      marginTop: 15,
    },
    title: {
      paddingHorizontal: 50,
      fontFamily: "Bebas",
      color: theme === "light" ? "#0E2B4F" : "white",
      fontSize: 40,
    },
    subtitle: {
      fontSize: 20,
    },
    body: {
      fontSize: 16,
    },
    image: {
      width: "100%",
      height: 340,
      marginTop: 25,
    },
    redact: {
      color: theme === "light" ? "#0E2B4F" : "white",
      textDecorationLine: "underline",
      fontFamily: "Gilroy-400",
      fontSize: 24,
      textAlign: "center",
      marginTop: 30,
    },
  });
