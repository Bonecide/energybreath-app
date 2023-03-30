import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { deleteAuth } from "../store/slices/userSlice";
import Title from "../UI/Text/Title";
import { StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";

export default function AudioPage() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          marginRight: 15,
          elevation: 4,
          shadowColor: "rgba(0, 0, 0)",
          shadowOffset: { height: 0, width: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
        }}
        onPress={() => setActiveSlide(index)}
      >
        <LinearGradient
          colors={
            theme === "dark" && activeSlide === index
              ? ["#8916FE", "#CF03FE"]
              : ["white", "white"]
          }
          style={s(theme).slide}
        >
          <Image
            style={s(theme).slideImage}
            source={require("../assets/musicBG/MusicBG1.png")}
          />
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const theme = useSelector((s) => s.theme.theme);
  const audio = [
    {
      id: 1,
      name: "Пилот",
      description: "Музыка для глубоких медитаций",
    },
    {
      id: 2,
      name: "Пилот 2",
      description: "Музыка для глубоких медитаций",
    },
    {
      id: 3,
      name: "Пилот 3",
      description: "Музыка для глубоких медитаций",
    },
    {
      id: 4,
      name: "Пилот 4",
      description: "Музыка для глубоких медитаций",
    },
    {
      id: 5,
      name: "Пилот 5",
      description: "Музыка для глубоких медитаций",
    },
  ];
  const isCarousel = useRef(null);
  const windowSize = Dimensions.get("window").width;
  useEffect(() => {
    isCarousel.current.snapToItem(activeSlide, (animated = true));
  }, [activeSlide]);
  return (
    <Layout>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 30 }}>
          <Title>Рекомендация </Title>
          <Text style={s(theme).listenNow}>718 человек слушают сейчас </Text>
        </View>
        {theme === "dark" ? (
          <ImageBackground
            style={s(theme).stars}
            source={
              theme === "dark" ? require("../assets/stars.png") : undefined
            }
          >
            <Carousel
              firstItem={1}
              style={s(theme).slider}
              showSpinner={true}
              spinnerColor={
                theme === "dark"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.25)"
              }
              ref={isCarousel}
              data={audio}
              renderItem={renderItem}
              sliderWidth={windowSize}
              sliderHeight={(height / 100) * 25}
              itemWidth={(height / 100) * 25}
              windowSize={windowSize}
              inactiveSlideScale={0.75}
              inactiveSlideOpacity={0.5}
              onSnapToItem={(e) => setActiveSlide(e)}
              useScrollView={true}
              contentContainerCustomStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </ImageBackground>
        ) : (
          <View style={s(theme).stars}>
            <Carousel
              firstItem={1}
              style={s(theme).slider}
              showSpinner={true}
              spinnerColor={
                theme === "dark"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.25)"
              }
              ref={isCarousel}
              data={audio}
              renderItem={renderItem}
              sliderWidth={windowSize}
              sliderHeight={(height / 100) * 25}
              itemWidth={(height / 100) * 25}
              windowSize={windowSize}
              inactiveSlideScale={0.75}
              inactiveSlideOpacity={0.5}
              onSnapToItem={(e) => setActiveSlide(e)}
              useScrollView={true}
              contentContainerCustomStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </View>
        )}
        <View style={s(theme).musicContainer}>
          <View>
            <Text style={s(theme).musicName}>{audio[activeSlide].name}</Text>
            <Text style={s(theme).musicDescription}>
              {audio[activeSlide].description}
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={require("../assets/allMusic.png")} />
          </TouchableOpacity>
        </View>
        <View style={s(theme, height).settingsContainer}>
          <Image
            source={
              theme === "dark"
                ? require(`../assets/back.png`)
                : require("../assets/LightBack.png")
            }
          />
          <TouchableOpacity
            style={s(theme).stop}
            onPress={() => setIsPlaying(!isPlaying)}
          >
            <ImageBackground
              style={s(theme, height).stop}
              source={
                theme === "light"
                  ? require("../assets/YellowStop.png")
                  : require("../assets/DarkStopButton.png")
              }
            >
              <Image
                source={
                  isPlaying
                    ? require("../assets/Pouse.png")
                    : require("../assets/PlayButton.png")
                }
              />
            </ImageBackground>
          </TouchableOpacity>
          <Image
            source={
              theme === "dark"
                ? require("../assets/next.png")
                : require("../assets/LightNext.png")
            }
          />
        </View>
      </SafeAreaView>
    </Layout>
  );
}
const height = Dimensions.get("screen").height;
const s = (theme) =>
  StyleSheet.create({
    listenNow: {
      fontFamily: "Gilroy-700",
      fontSize: 16,
      marginTop: 10,
      color: theme === "light" ? "#B3B3B3" : "#D357FF",
    },
    stars: {
      height: (height / 100) * 40,
      backgroundColor: "transparent",
      opacity: 1,
      marginTop: 10,
      justifyContent: "center",
      zIndex: 0,
    },
    title: {
      color: "white",
      fontSize: 20,
    },
    slider: {
      justifyContent: "center",
      alignItems: "center",
    },
    slide: {
      width: (height / 100) * 25,
      height: (height / 100) * 25,
      borderRadius: 999,
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    slideImage: {
      width: (height / 100) * 25 - 15,
      height: (height / 100) * 25 - 15,
      resizeMode: "cover",
      borderRadius: 999,
    },
    musicContainer: {
      paddingHorizontal: 30,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    musicName: {
      fontFamily: "Gilroy-700",
      color: theme === "light" ? "black" : "white",
      fontSize: 14,
    },
    musicDescription: {
      fontFamily: "Gilroy-400",
      fontSize: 12,
      marginTop: 5,
      color: theme === "light" ? "black" : "#D357FF",
    },
    settingsContainer: {
      marginTop: 33,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 40,
      flexDirection: "row",
    },
    stop: {
      width: 86,
      height: 86,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 999,
      marginHorizontal: 87,
    },
  });
