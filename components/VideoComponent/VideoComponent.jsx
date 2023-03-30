import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import { StyleSheet, Animated } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { Video } from "expo-av";
import Slider from "@react-native-community/slider";
export default function VideoComponent() {
  const navigation = useNavigation();
  const route = useRoute();
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const videoRef = useRef(null);

  const [isSettings, setIsSettings] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoString, setVideoString] = useState("00:00");
  const theme = useSelector((s) => s.theme.theme);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
  };

  const handleSliderChange = (value) => {
    if (value != 0) {
      setIsPlaying(true);
      setPosition(value);
    }
  };
  useEffect(() => {
    const ms = videoDuration;
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const timeStr = `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;

    setVideoString(timeStr);
  }, [videoDuration]);
  useEffect(() => {
    navigation.addListener("blur", (e) => {
      setIsPlaying(false);
      videoRef.current.pauseAsync();
    });
    return () => {
      navigation.removeListener('blur')
    }
  }, []);
  const handlePlaybackStatusUpdate = (status) => {
    setVideoDuration(status.positionMillis);
  };
  const handleLoad = (data) => {
    setDuration(data.durationMillis);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        backgroundColor: "transparent",
        position: "absolute",
        zIndex: 1,
        paddingTop: 20,
        borderTopWidth: 0,
        elevation: 0,
        paddingBottom: 30,
      },
    });
  }, []);
  useEffect(() => {
    if (isSettings) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true, // Используем нативный драйвер для улучшения производительности
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [isSettings]);
  return (
    <>
      <Pressable
        onPress={() => setIsSettings(!isSettings)}
        style={{ position: "absolute", width: width, height: height }}
      >
        <Video
          ref={videoRef}
          positionMillis={position}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
          onLoad={handleLoad}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping={true}
          style={{ position: "absolute", width: width, height: height }}
        />
      </Pressable>

      <Animated.View style={[s(theme, height).settings, { opacity: fadeAnim }]}>
        <View style={s(theme, height).settingsContainer}>
          <Image source={require("../../assets/back.png")} />
          <TouchableOpacity onPress={handlePlayPause}>
            <ImageBackground
              style={s(theme, height).stop}
              source={
                theme === "light"
                  ? require("../../assets/LightStopButton.png")
                  : require("../../assets/DarkStopButton.png")
              }
            >
              <Image
                source={
                  isPlaying
                    ? require("../../assets/Pouse.png")
                    : require("../../assets/PlayButton.png")
                }
              />
            </ImageBackground>
          </TouchableOpacity>
          <Image source={require("../../assets/next.png")} />
        </View>
        <View style={{ zIndex: 300 }}>
          <Slider
            style={s(theme, height).slider}
            minimumValue={1}
            maximumValue={duration}
            value={videoDuration}
            onValueChange={handleSliderChange}
            thumbTintColor={"#FFB000"}
            maximumTrackTintColor={"white"}
            minimumTrackTintColor={"#FFB000"}
          />
          <Text style={s(theme, height).duration}>{videoString}</Text>
        </View>
      </Animated.View>
    </>
  );
}
const s = (theme, height) =>
  StyleSheet.create({
    settings: {
      alignSelf: "center",
      zIndex: 9,
      marginTop: height / 2.7,
    },
    slider: {
      width: 357,
    },
    settingsContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: 357,
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
    duration: {
      fontFamily: "Gilroy-400",
      color: "white",
      marginTop: 10,
      marginLeft: 10,
    },
  });
