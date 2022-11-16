import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import { styles } from "../lib/styles";

export function genero() {
  const navigation = useNavigation();

  function open() {
    navigation.navigate("Genero");
  }
  const [checked, setChecked] = React.useState("first");

  return (
    <View>
      <Text style={styles.tittle}>Qual é o seu gênero?</Text>
      <Text style={styles.text}>o seu gênero aparecerá no seu perfil</Text>
      <View style={styles.row}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>aaaaa</Text>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          
          <Text style={styles.text}>aaaaa</Text>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
        </View>
      </View>

      <View style={styles.div}>
        <Button style={styles.botao} mode="contained" onPress={open}>
          Enviar
        </Button>
      </View>
    </View>
  );
}
