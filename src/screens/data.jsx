import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import DatePicker from "react-native-date-picker";

export function data() {
  const [date, setDate] = useState(new Date())


  return (
    <View>
      <Text style={styles.tittle}>Quando é seu aniversário:</Text>
      <Text style={styles.text}>a data aparecerá no seu perfil</Text>
      <View style={styles.div}>
      <DatePicker date={date} onDateChange={setDate} />
      </View>
      <View style={styles.div}>
        <Button style={styles.botao} mode="contained" onPress={open}>
          Enviar
        </Button>
      </View>
    </View>
  );
  }

const styles = StyleSheet.create({
  tittle: {
    textAlign: "center",
    margin: 24,
    fontSize: "20px",
    marginTop: '20rem',
    fontWeight: "bold",
  
  },
  text: {
    textAlign: "center",
    opacity: "50%",
  },
  input: {
    display: "flex",
    padding: 0,
    width: 150,
  },
  div: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "768px",
    margin: "auto",
  },
 
  botao: {
    width: "20rem",
  },
});
