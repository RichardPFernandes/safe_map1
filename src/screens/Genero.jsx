import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import { styles } from "../lib/styles";

export function Genero() {
  const navigation = useNavigation();

  function open() {
    navigation.navigate("Numero");
  }
  const [checked, setChecked] = React.useState("first");

  return (
    <View>
      <Text style={styles.tittle}>Qual é o seu gênero?</Text>
      <Text style={styles.text}>o seu gênero aparecerá no seu perfil</Text>
      <View style={styles.row}>
        <View style={{ flexDirection: "row", alignItems: "center", margin: 40, }}>

          <Text style={styles.text}>Feminino</Text>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />

          <Text style={styles.text}>Outros</Text>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
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
