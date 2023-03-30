import { Button, SafeAreaView, Text, View } from "react-native";
import Layout from "../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { deleteAuth } from "../store/slices/userSlice";
import News from "../components/Main/News/News";
import { setDark, setLight } from "../store/slices/themeSlice";
import Music from "./../components/Main/Music/Music";
import Video from "../components/Main/Video/Video";

export default function MainPage() {
  const dispatch = useDispatch();

  const theme = useSelector((s) => s.theme.theme);
  const changeTheme = () => {
    if (theme === "light") {
      dispatch(setDark());
    } else dispatch(setLight());
  };
  return (
    <Layout>
      <View style={{ flex: 1,padding : 30,paddingTop : 0 }}>
        <News />
        <Music />
        <Video />
        <Button title="сменить тему" onPress={changeTheme} />
        <Button title="Выйти" onPress={() => dispatch(deleteAuth())} />
      </View>
    </Layout>
  );
}
