import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import VideoItem from "./VieoItem";

const renderNewsItem = (itemData) => {
  return <VideoItem item={itemData.item} />;
};
export default function Video() {
  const theme = useSelector((s) => s.theme.theme);

  const fakeVideo = [
    {
      id: 1,
      title: "Энергичное утро",
      desc : 'Добавь энергии твоему дню',
      image: "../../../assets/videoBG/VideoBG1.png",
    },
    {
        id: 2,
        title: "Энергичное утро",
        desc : 'Добавь энергии твоему дню',
        image: "../../../assets/videoBG/VideoBG1.png",
      },
      {
        id: 3,
        title: "Энергичное утро",
        desc : 'Добавь энергии твоему дню',
        image: "../../../assets/videoBG/VideoBG1.png",
      },
      {
        id: 4,
        title: "Энергичное утро",
        desc : 'Добавь энергии твоему дню',
        image: "../../../assets/videoBG/VideoBG1.png",
      },
  ];
  return (
    <View style={s(theme).container}>
      <Text style={s(theme).title}>Видео</Text>
      <FlatList
        horizontal = {true}
        renderItem={renderNewsItem}
        data={fakeVideo}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const s = (theme) =>
  StyleSheet.create({
    title: {
      fontFamily: "Gilroy-700",
      fontSize: 36,
      color: theme === "dark" ? "white" : "black",
      marginVertical: 15,
    },
    container: {
      marginTop: 15,
    },
  });
