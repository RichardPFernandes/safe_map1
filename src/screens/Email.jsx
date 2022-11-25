import React, { useState, useRef } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";



export function Email() {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
    const [text1, setText1] = React.useState("");
  function open() {
    navigation.navigate("Senha");
  }
  return (
    <View>
      <Text style={styles.tittle}>Insira o seu email:</Text>
      <Text style={styles.text}>Seu email será visivel</Text>
      <View style={{ alignItems: 'center', justifyContent: "center" }}>
        <View style={styles.left}>
          <View>
            <TextInput
              style={styles.number}
              keyboardType="phone-pad"
              autoCompleteType="tel"
              label="Email"
              mode='flat'
              value={text}
              onChangeText={text => setText1(text)}
            />
          </View>
        </View>
      </View>
      <View style={styles.div}>
        <Button style={styles.botao} mode="contained" onPress={sendVerification}>
          Enviar
        </Button>
      </View>
    </View>
  );
};
