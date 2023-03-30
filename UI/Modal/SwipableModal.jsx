import React, { useState } from "react";
import { Dimensions } from "react-native";
import { Text, View } from "react-native";
import { StyleSheet, PanResponder, Animated } from "react-native";
import { useSelector } from "react-redux";

const height = Dimensions.get("window").height;
export const SwipeableModal = () => {
  const [pan] = useState(
    new Animated.ValueXY({ x: 0, y: (height / 100) * 85 })
  );
  const theme = useSelector((s) => s.theme.theme);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event([null, { dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      pan.flattenOffset();
    },
  });

  const translateY = pan.y.interpolate({
    inputRange: [(height / 100) * 34, (height / 100) * 35, (height / 100) * 85],
    outputRange: [
      (height / 100) * 34,
      (height / 100) * 35,
      (height / 100) * 85,
    ],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={[
        styles(theme).modal,
        {
          transform: [{ translateY: translateY }],
        },
      ]}
    >
      <View style={styles(theme).container}>
        <View {...panResponder.panHandlers} style={styles(theme).drag}>
          <View style={styles(theme).dragItem} />
        </View>
        <Text style={styles(theme).header}>Заголовок модалки</Text>
        <View style={styles(theme).content}>
          <Text>Содержимое модалки</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      position: "relative",
      padding: 50,
    },
    drag: {
      alignSelf: "center",
      width: "100%",
      height: 300,
      alignItems: "center",
      position: "absolute",
      top: 20,
    },
    dragItem: {
      width: 34,
      height: 4,
      borderRadius: 25,
      backgroundColor: "white",
    },
    modal: {
      zIndex: 9999999999,
      position: "absolute",
      width: "100%",
      height: height * 0.7,
      top: 0,

      backgroundColor: theme === "light" ? "#49390099" : "#1D093B99",
      borderRadius: 30,
    },
    header: {
      fontSize: 20,
      fontWeight: "bold",
      padding: 10,
    },
    content: {
      padding: 10,
    },
  });
export default React.memo(SwipeableModal);
