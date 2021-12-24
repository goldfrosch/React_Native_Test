import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LocationInfo from "./components/location/LocationInfo";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <LocationInfo />
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  testFont: {
    fontSize: 17,
    color: "#a9cc11",
  },
  main: {
    flex: 10,
    backgroundColor: "#00aaff",

    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
