import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import firebase from "firebase/compat/app";
import { Button } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../lib/styles";

export const LogOut = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    navigation.navigate("Home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button style={styles.botao} mode="contained" onPress={handleLogout}>
        Sair
      </Button>
    </View>
  );
};
