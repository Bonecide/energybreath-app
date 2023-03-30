import { StyleSheet } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function NewMessages() {
  const unreadMessages = 0;

  const theme = useSelector((s) => s.theme.theme);
  const navigation = useNavigation();
  return (
    <View style={s(theme).newMessages}>
      {unreadMessages ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("messages")}
          style={s(theme).MessagesContainer}
        >
          <Text style={s(theme).Messages}>
            Новых сообщений ({unreadMessages})
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate("messages")}
          style={s(theme).NoMessagesContainer}
        >
          <Text style={s(theme).NoMessages}>Нет новых сообщений</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const s = (theme) =>
  StyleSheet.create({
    newMessages: {
      marginTop: 30,
    },
    NoMessagesContainer: {
      alignSelf: "center",
      paddingHorizontal: 28,
      paddingVertical: 18,
      backgroundColor: "white",
      borderRadius: 10,
    },
    NoMessages: {
      fontFamily: "Gilroy-400",
      color: "#B3B3B3",
      fontSize: 20,
    },
    MessagesContainer: {
      alignSelf: "center",
      paddingHorizontal: 28,
      paddingVertical: 18,
      backgroundColor: "#30F166",
      borderRadius: 10,
    },
    Messages: {
      fontFamily: "Gilroy-400",
      color: "#0E2B4F",
      fontSize: 20,
    },
  });
