import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Image from local storage*/}
      <Text>Image from local storage</Text>
      <Image style={styles.logo} source={require("./src/images/logo.png")} />

      {/* Image from url link*/}
      <Text>Image from url link</Text>
      <Image
        style={styles.logo}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />

      {/* blurRadius*/}
      <Text>Blur img</Text>
      <Image
        style={styles.logo}
        blurRadius={2}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />

      {/* Default img source*/}
      <Text>Default img source</Text>
      <Image
        style={styles.logo}
        defaultSource={require("./src/images/logo.png")}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />

      {/* onLoad Handler*/}
      <Text>onLoad Handler</Text>
      <Image
        style={styles.logo}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        onLoad={() => alert("img loaded")}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 100,
    width: 100,
    margin: 10,
  },
});
