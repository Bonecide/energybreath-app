import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import UserLayout from "../UserLayout";
import { useSelector } from "react-redux";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import CommonButton from "../../../UI/Buttons/CommonButton";
import CheckPublication from "./CheckPublication";
export default function CreatePublication() {
  const [image, setImage] = useState();
  const theme = useSelector((s) => s.theme.theme);
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
  const [isVisible,setIsVisible] = useState(false)
  const [data,setData] = useState({})
  return (
    <>
    <UserLayout title={"Создать публикацию"}>
      <TextInput
        textAlignVertical="top"
        style={s(theme).input}
        placeholderTextColor={"#B3B3B3"}
        placeholder="Текс заголовка"
        onChangeText={(text) => setData((prev) => ({
          ...prev,
          title : text
        }))}
      />
      <TextInput
        textAlignVertical="top"
        style={[s(theme).input, { height: 115 }]}
        placeholderTextColor={"#B3B3B3"}
        placeholder="Текст подзаголовка"
        multiline
        numberOfLines={6}
        onChangeText={(text) => setData((prev) => ({
          ...prev,
          subtitle : text
        }))}
      />
      <TextInput
        textAlignVertical="top"
        style={[s(theme).input, { height: 294 }]}
        placeholderTextColor={"#B3B3B3"}
        placeholder="Текст публикации"
        multiline
        numberOfLines={10}
        onChangeText={(text) => setData((prev) => ({
          ...prev,
          body : text
        }))}
      />
      <TouchableOpacity onPress={pickImage} style={s(theme).addPhotoContainer}>
        <Image source={require("../../../assets/AddImage.png")} />
        <Text style={s(theme).addPhotoText}>
          {!image ? "Добавьте фото публикации" : "Выбрать другое фото"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsVisible(true)} >
        <Text style={s(theme).check}>Просмотр публикации</Text>
      </TouchableOpacity>
      <CommonButton isBold style={s(theme).button}>Опубликовать</CommonButton>
    </UserLayout>
      <Modal onRequestClose={() => setIsVisible(false)} animationType="slide" presentationStyle="pageSheet" visible={isVisible}>
        <CheckPublication setIsVisible={setIsVisible} data={{...data,image}}/>
      </Modal>
    </>
  );
}

const s = (theme) =>
  StyleSheet.create({
    input: {
      borderRadius: 10,
      width: "100%",
      backgroundColor: "white",
      padding: 20,
      paddingTop: 20,
      marginTop: 30,
      fontFamily: "Gilroy-400",
      textAlign: "left",
      fontSize: 18,
      alignItems: "flex-start",
    },
    addPhotoText: {
      fontFamily: "Gilroy-400",
      fontSize: 18,
      color: "#B3B3B3",
      marginLeft: 15,
    },
    addPhotoContainer: {
      marginTop: 30,
      alignSelf: "flex-end",
      flexDirection: "row",
      alignItems: "center",
    },
    check : {
        color : theme === 'light'? '#0E2B4F' : 'white',
        fontFamily : 'Gilroy-400',
        fontSize : 24,
        textAlign : 'center',
        textDecorationLine : 'underline',
        marginTop : 50,
    },
    button : {
        marginTop : 50,
        marginBottom : 50,

    }
  });
