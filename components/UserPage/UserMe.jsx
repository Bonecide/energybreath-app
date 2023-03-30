import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import UserLayout from "./UserLayout";
import Title from "./../../UI/Text/Title";
import FriendCard from "./FriendCard/FriendCard";
import NewMessages from "./UI/NewMessges";
import Publications from "./Publications/Publications";
import CommonButton from "../../UI/Buttons/CommonButton";

const renderFriends = (itemData) => {
  const item = itemData.item;
  return <FriendCard item={item} />;
};
export default function UserMe({navigation}) {
  
  const fakeFriends = [
    {
      id: 1,
      username: "роман",
      image: "../../../assets/videoBG/FriendImage.png",
    },
    {
      id: 2,
      username: "роман",
      image: "../../../assets/videoBG/FriendImage.png",
    },
    {
      id: 3,
      username: "роман",
      image: "../../../assets/videoBG/FriendImage.png",
    },
    {
      id: 4,
      username: "роман",
      image: "../../../assets/videoBG/FriendImage.png",
    },
  ];
  return (
    <>
      <UserLayout title={"ЛИЧНЫЙ КАБИНЕТ"}>
      <CommonButton onPress={() => navigation.navigate('redactProfile')} isBold style={s.button}>
          Редактировать профиль
        </CommonButton>
        <View>
          <Title style={{ marginTop: 50, marginBottom: 30 }}>Друзья</Title>

          <FlatList
            horizontal={true}
            renderItem={renderFriends}
            data={fakeFriends}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <NewMessages/>
        <Publications/>
      </UserLayout>
    </>
  );
}

const s = StyleSheet.create({
  button: {
    alignSelf: "center",
    width: 304,
    marginTop: 30,
  },
});
