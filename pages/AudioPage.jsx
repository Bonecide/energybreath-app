import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  Pressable,
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
import { Platform } from "react-native";

export default function AudioPage() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudios, setCurrentAudios] = useState();
  const [isModalView, setIsModalView] = useState(false);
  const renderItem = ({ item, index }) => {
    console.log(activeSlide)
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
      audios: [
        {
          name: "Песня 1",
          description: "Первая категория Песня 1",
        },
        {
          name: "Песня 2",
          description: "Первая категория Песня 2",
        },
        {
          name: "Песня 3",
          description: "Первая категория Песня 3",
        },
        {
          name: "Песня 4",
          description: "Первая категория Песня 4",
        },
        {
          name: "Песня 5",
          description: "Первая категория Песня 5",
        },
        {
          name: "Песня 6",
          description: "Первая категория Песня 6",
        },
        {
          name: "Песня 7",
          description: "Первая категория Песня 7",
        },
        {
          name: "Песня 8",
          description: "Первая категория Песня 8",
        },
      ],
    },
    {
      id: 2,
      name: "Пилот 2",
      description: "Музыка для глубоких медитаций",
      audios: [
        {
          name: "Песня 1",
          description: "Вторая категория Песня 1",
        },
        {
          name: "Песня 2",
          description: "Вторая категория Песня 2",
        },
        {
          name: "Песня 3",
          description: "Вторая категория Песня 3",
        },
        {
          name: "Песня 4",
          description: "Вторая категория Песня 4",
        },
        {
          name: "Песня 5",
          description: "Вторая категория Песня 5",
        },
        {
          name: "Песня 6",
          description: "Вторая категория Песня 6",
        },
        {
          name: "Песня 7",
          description: "Вторая категория Песня 7",
        },
        {
          name: "Песня 8",
          description: "Вторая категория Песня 8",
        },
      ],
    },
    {
      id: 3,
      name: "Пилот 3",
      description: "Музыка для глубоких медитаций",
      audios: [
        {
          name: "Песня 1",
          description: "Третья категория Песня 1",
        },
        {
          name: "Песня 2",
          description: "Третья категория Песня 2",
        },
        {
          name: "Песня 3",
          description: "Третья категория Песня 3",
        },
        {
          name: "Песня 4",
          description: "Третья категория Песня 4",
        },
        {
          name: "Песня 5",
          description: "Третья категория Песня 5",
        },
        {
          name: "Песня 6",
          description: "Третья категория Песня 6",
        },
        {
          name: "Песня 7",
          description: "Третья категория Песня 7",
        },
        {
          name: "Песня 8",
          description: "Третья категория Песня 8",
        },
      ],
    },
    {
      id: 4,
      name: "Пилот 4",
      description: "Музыка для глубоких медитаций",
      audios: [
        {
          name: "Песня 1",
          description: "Четвёртая категория Песня 1",
        },
        {
          name: "Песня 2",
          description: "Четвёртая категория Песня 2",
        },
        {
          name: "Песня 3",
          description: "Четвёртая категория Песня 3",
        },
        {
          name: "Песня 4",
          description: "Четвёртая категория Песня 4",
        },
        {
          name: "Песня 5",
          description: "Четвёртая категория Песня 5",
        },
        {
          name: "Песня 6",
          description: "Четвёртая категория Песня 6",
        },
        {
          name: "Песня 7",
          description: "Четвёртая категория Песня 7",
        },
        {
          name: "Песня 8",
          description: "Четвёртая категория Песня 8",
        },
      ],
    },
    {
      id: 5,
      name: "Пилот 5",
      description: "Музыка для глубоких медитаций",
    },
  ];
  console.log(audio.length)
  const isCarousel = useRef(null);
  const windowSize = Dimensions.get("window").width;
  useEffect(() => {
    isCarousel.current.snapToItem(activeSlide, (animated = true));
    setCurrentAudios(audio[activeSlide].audios);
  }, [activeSlide]);
  return (
    <>
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
            <TouchableOpacity onPress={() => setIsModalView(true)}>
              <Image source={require("../assets/allMusic.png")} />
            </TouchableOpacity>
          </View>
          <View style={s(theme, height).settingsContainer}>
            <TouchableOpacity onPress={() => setActiveSlide(prev => prev > 0 ? prev - 1 : audio.length - 1)}>
            <Image
              source={
                theme === "dark"
                  ? require(`../assets/back.png`)
                  : require("../assets/LightBack.png")
              }
            />
            </TouchableOpacity>
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
           <TouchableOpacity onPress={() => setActiveSlide(prev => prev < audio.length -1 ? prev + 1 : 0)} >
           <Image
              source={
                theme === "dark"
                  ? require("../assets/next.png")
                  : require("../assets/LightNext.png")
              }
            />
           </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Layout>
      <Modal
        onRequestClose={() => setIsModalView(false)}
        animationType={"slide"}
        presentationStyle={"formSheet"}
        visible={isModalView}
      >
        <Layout without={true}>
          {Platform.OS=== 'android' && (
            <Pressable onPress={() => setIsModalView(false)} style={s(theme).close}>
                <Text style={s(theme).closeText}>
                  Закрыть
                </Text>
            </Pressable>
          )} 
          <View style={s(theme).audioModal}>
            {currentAudios?.map((info) => (
              <View style={s(theme).audio} key={info.description}>
                <Image source={theme === 'light' ? require("../assets/LightAudioCircle.png") : require("../assets/DarkAudioCircle.png")} />
                <View style={s(theme).audioInfo}>
                  <Text style={s(theme).AudioDescription}>{info.description}</Text>
                  <Text style={s(theme).AudioName}>{info.name}</Text>
                </View>
              </View>
            ))}
          </View>
        </Layout>
      </Modal>
    </>
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
    audioModal: {
      paddingHorizontal: 50,
      marginTop: 50,
    },
    audio : {
      flexDirection : 'row',
      marginBottom : 20,
      alignItems : 'center',
      
    },
    audioInfo : {
      marginLeft : 30,

    },
    AudioDescription : {
      fontFamily : 'Gilroy-400',
      color : '#B3B3B3',

    },
    AudioName : {
      fontFamily : 'Gilroy-700',
      color : '#B3B3B3',
      fontSize : 14,
      marginTop : 6,
    },
    close : {
      position : 'absolute',
      top : 10,
      left : 10
    },
    closeText : {
      color : theme === 'light' ? 'black' : 'white'
    }
  });
