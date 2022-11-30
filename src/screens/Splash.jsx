import { useEffect } from "react";
import { Text, View } from "react-native";
import { Paragraph } from "react-native-paper";
import firebase from "firebase/compat/app";

export const Splash = ({ navigation }) => {
  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  function checkIfUserIsLoggedIn() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user is logged in");
        navigation.navigate("RootApp");
      } else {
        navigation.navigate("Home");
      }
    });
  }
  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ textShadowOffset:{width: 2, height: 2} ,textShadowRadius: 10, textShadowColor: '#565656', fontSize: 50, }}>Safe Map</Text>
    </View>
  );
};
