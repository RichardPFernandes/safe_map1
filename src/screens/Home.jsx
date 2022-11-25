import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";

export function Home() {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");
  const [text1, setText1] = React.useState("");

  function openLogin() {
    navigation.navigate("PaginaInicial");
  }
  function openCadastro() {
    navigation.navigate("Cadastro");
  }
  return (
    <View>
      <View style={{ ...styles.div, marginTop: 400, }}>
        <TextInput
          style={styles.input1}
          label="Email"
          mode='flat'
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.input1}
          label="Senha"
          mode='flat'
          value={text1}
          onChangeText={text1 => setText1(text1)}
        />
        <Button style={styles.botao1} mode="contained" onPress={openLogin}>
          Enviar
        </Button>
        <View style={styles.hairline} />
        <Text style={styles.loginButtonBelowText1}>OR</Text>
        <View style={styles.hairline} />
      </View>
    </View>
  );
};
