import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";

export function numero() {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");

  function open() {
    navigation.navigate("Cadastro");
  }
  return (
    <View>
      <Text style={styles.tittle}>Insira o seu numero de celular:</Text>
      <Text style={styles.text}>você precisará confirmar o código que enviaremos ao seu celular</Text>
      <View style={{  alignItems: 'center', justifyContent: "center"}}>
        <View style={styles.left}>
          <View>
          <TextInput
            style={styles.number}
            keyboardType="numeric"
            label="Número"
            mode='flat'
            value={text}
            onChangeText={text => setText(text)}
          />
           </View>
        </View>
      </View>
      <View style={styles.div}>
        <Button style={styles.botao} mode="contained" onPress={open}>
          Enviar
        </Button>
      </View>
    </View>
  );
};
