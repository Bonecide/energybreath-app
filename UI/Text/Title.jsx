import { StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

export default function Title({ children, style }) {
  const theme = useSelector((s) => s.theme.theme);
  return <Text style={[s(theme).text, style]}>{children}</Text>;
}

const s = (theme) =>
  StyleSheet.create({
    text: {
      fontFamily: "Gilroy-700",
      color: theme === "light" ? "black" : "white",
      fontSize: 36,
    },
  });
