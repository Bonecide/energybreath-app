import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import NewsItem from "./NewsItem";

const renderNewsItem = (itemData) => {
  return <NewsItem item={itemData.item} />;
};
export default function News() {
  const theme = useSelector((s) => s.theme.theme);

  const fakeNews = [
    {
      id: 1,
      title: "заголовок поста",
      image: "../../../assets/newsBG/News1.png",
    },
    {
      id: 2,
      title: "заголовок поста",
      image: "../../../assets/newsBG/News2.png",
    },
    {
      id: 3,
      title: "заголовок поста",
      image: "../../../assets/newsBG/News1.png",
    },
    {
      id: 4,
      title: "заголовок поста",
      image: "../../../assets/newsBG/News2.png",
    },
  ];
  return (
    <View style={s(theme).container}>
      <Text style={s(theme).title}>Новости</Text>
      <FlatList
        horizontal = {true}
        renderItem={renderNewsItem}
        data={fakeNews}
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
  });
