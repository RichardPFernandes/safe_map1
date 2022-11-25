import React, { useState } from "react";
import {  Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { styles } from "../lib/styles";


export function Data() {
  const [date, setDate] = useState(new Date())

  
  const navigation = useNavigation();

  function open() {
    navigation.navigate("Genero");
  }

  return (
    <View>
      <Text style={styles.tittle}>Quando é seu aniversário:</Text>
      <Text style={styles.text}>a data aparecerá no seu perfil</Text>
      <View style={styles.div}>
      </View>
      <View style={styles.div}>
        <Button style={styles.botao} mode="contained" onPress={open}>
          Enviar
        </Button>
      </View>
    </View>
  );
  }

