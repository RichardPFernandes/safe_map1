import React, { useState, useRef } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";

export function Data() {
  const navigation = useNavigation();
  const [Data, setData] = useState("");
  const [checkValidData, setCheckValidData] = useState(false);
  const handleCheckData = (text) => {
    let regex =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    setData(text);
    if (regex.test(text)) {
      setCheckValidData(false);
    } else {
      setCheckValidData(true);
    }
  };
  function handleClick() {
    if (Data.trim().length > 5) {
      open();
    } else {
      alert("Data Invalida");
    }
  }

  function open() {
    navigation.navigate("Cep");
  }
  return (
    <View>
      <Text style={styles.tittle}>Quando é seu aniversario:</Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.left}>
          <View>
            <TextInput
              style={styles.number}
              keyboardType="Default"
              label="Data de nascimento"
              mode="flat"
              value={Data}
              onChangeText={(text) => handleCheckData(text)}
            />
          </View>
        </View>
      </View>
      <View style={styles.div}>
        <Button
          style={styles.botao}
          mode="contained"
          onPress={() => {
            checkValidData ? alert("Data invalida") : handleClick();
          }}
        >
          Enviar
        </Button>
      </View>
    </View>
  );
}
