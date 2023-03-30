import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Messages from "../components/UserPage/Messages/Messages";
import Publication from "../components/UserPage/Publications/Publication/Publication";
import UserMe from "../components/UserPage/UserMe";
import CreatePublication from "./../components/UserPage/CreatePublication/CreatePublication";
import RedactProfile from "./../components/UserPage/RedactProfile/RedactProfile";

const Stack = createNativeStackNavigator();
export default function UserPage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="me" component={UserMe} />
      <Stack.Screen
        name="publication"
        options={{
          presentation: "card",
        }}
        component={Publication}
      />
      <Stack.Screen
        name="createPublic"
        options={{
          presentation: "card",
        }}
        component={CreatePublication}
      />
      <Stack.Screen
        name="redactProfile"
        options={{
          presentation: "card",
        }}
        component={RedactProfile}
      />
      <Stack.Screen
        name="messages"
        options={{
          presentation: "card",
        }}
        component={Messages}
      />
    </Stack.Navigator>
  );
}
