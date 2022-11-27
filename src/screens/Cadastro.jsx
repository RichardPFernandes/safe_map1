import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";

export function Cadastro() {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");
  const [text1, setText1] = React.useState("");

    
  const handleClick = event => {
    event.preventDefault();

    if (text.trim().length >= 3 && text1.trim().length >= 3) {
       open()
    } else {
        alert('é necessario que o nome e sobrenome tenha ao menos 4 caracteres');
    }
}

  function open() {
    navigation.navigate("Data");
  }
  return (
    <View>
      <Text style={styles.tittle}>Digite seu nome:</Text>
      <Text style={styles.text}>o nome aparecerá no seu perfil</Text>
      <View style={{  alignItems: 'center', justifyContent: "center"}}>
        <View style={styles.left}>
          <View style={{justifyContent: 'space-between', marginRight: 20,}}>
          <TextInput
            style={styles.input}
            label="Nome"
            mode='flat'
            value={text}
            onChangeText={text => setText(text)}
          />
          </View>
          <View style={{justifyContent: 'space-between',}}>
          <TextInput
            style={styles.input}
            label="Sobrenome"
            mode='flat'
            value={text1}
            onChangeText={text1 => setText1(text1)}
          />
           </View>
        </View>
      </View>
      <View style={styles.div}>
        <Button style={styles.botao} mode="contained" onPress={handleClick}>
          Enviar
        </Button>
      </View>
    </View>
  );
};
