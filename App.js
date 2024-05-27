import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { store } from "./store";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
}
