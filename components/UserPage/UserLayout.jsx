import Layout from "../Layout/Layout";
import { LinearGradient } from "expo-linear-gradient";
import CommonButton from "../../UI/Buttons/CommonButton";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GradientText from "./../../UI/GradientText/GradientText";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from '@react-navigation/native';
export default function UserLayout({ title, photo, children }) {
  const [image, setImage] = useState(null);
  const theme = useSelector((s) => s.theme.theme);
  const username = useSelector((s) => s.user.user.login);
  const navigation = useNavigation()
  const pickImage = async () => {
    await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
      .then((res) => {
        setImage(res.assets[0].uri);
      })
      .catch((e) => {});
  };
  const route = useRoute()
  
  return (
    <>
      <Layout without={true}>
        {route.name !='me' &&(
          <TouchableOpacity onPress={() => navigation.goBack()} style={s(theme).goBackContainer}>
            <Text style={s(theme).goBack}>Назад</Text>
          </TouchableOpacity>
        )}
        <Pressable
          onPress={title === "ЛИЧНЫЙ КАБИНЕТ" ? pickImage : undefined}
          style={s(theme).pressPhoto}
        >
          <LinearGradient
            style={s(theme).avatarContainer}
            colors={
              theme === "dark" ? ["#8916FE", "#CF03FE"] : ["#EAEAEA", "#EAEAEA"]
            }
          >
            <Image
              style={s(theme).avatar}
              source={
                !image ? require("../../assets/bigAvatar.png") : { uri: image }
              }
            />
          </LinearGradient>
        </Pressable>
        {theme === "light" && (
          <ImageBackground
            source={require("../../assets/BackgroundGradient.png")}
            style={s(theme).ImageBackground}
          >
            <Image
              style={s(theme).circles}
              source={require("../../assets/lightCircles.png")}
            />
            <Text style={s(theme).title}>{title}</Text>
          </ImageBackground>
        )}
        {theme === "dark" && (
          <View style={s(theme).ImageBackground}>
            <Image
              style={s(theme).circles}
              source={require("../../assets/darkCircles.png")}
            />
            <GradientText
              style={s(theme).gradientText}
              colors={["#00FFFF", "#BD00FF"]}
            >
              {title}
            </GradientText>
          </View>
        )}
        <Text style={s(theme).username}>{username}</Text>
       
            <View style={{ flex: 1, paddingHorizontal: 30 }}>{children}</View>
      </Layout>
    </>
  );
}

const height = Dimensions.get("screen").height;
const s = (theme) =>
  StyleSheet.create({
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
    gradientText: {
      fontSize: 38,
      fontFamily: "Bebas-light",
    },
    title: {
      fontSize: 38,
      color: "white",
      fontFamily: "Bebas-light",
    },
    circles: {
      position: "absolute",
      top: 40,
      resizeMode: "contain",
    },
    avatarContainer: {
      width: 194,
      height: 194,
      zIndex: 0,
      borderRadius: 999,
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    avatar: {
      width: "95%",
      height: "95%",
      borderRadius: 999,
    },
    username: {
      marginTop: 127,
      textAlign: "center",
      fontFamily: "Gilroy-400",
      color: theme === "dark" ? "orange" : "black",
      fontSize: 24,
    },
    pressPhoto: {
      position: "absolute",
      alignSelf: "center",
      top: 210,
      zIndex: 9,
    },
    goBackContainer : {
      position : 'absolute',
      zIndex : 9999,
      top : 30,
      left : 30,
    },
    goBack : {
      fontFamily : 'Gilroy-400',
      fontSize : 20,
      color : theme === 'light' ? 'black' : 'white',

    }
  });
