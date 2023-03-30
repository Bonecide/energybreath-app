import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MusicItem from "./MusicItem";

const renderNewsItem = (itemData) => {
  return <MusicItem item={itemData.item} />;
};
export default function Music() {
  const theme = useSelector((s) => s.theme.theme);

  const fakeMusic = [
    {
      id: 1,
      image: "../../../assets/newsBG/News1.png",
    },
    {
      id: 2,
      image: "../../../assets/newsBG/News2.png",
    },
    {
      id: 3,
      image: "../../../assets/newsBG/News1.png",
    },
    {
      id: 4,
      image: "../../../assets/newsBG/News2.png",
    },
  ];
  return (
    <View style={s(theme).container}>
      <Text style={s(theme).title}>Музыка</Text>
      <FlatList
        horizontal = {true}
        renderItem={renderNewsItem}
        data={fakeMusic}
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
