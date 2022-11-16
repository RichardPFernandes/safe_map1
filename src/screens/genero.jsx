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
  const [value, setValue] = React.useState('first');

  return (
    <View>
      <Text style={styles.tittle}>Qual é o seu gênero?</Text>
      <Text style={styles.text}>o seu gênero aparecerá no seu perfil</Text>
      <View style={styles.div}>
      </View>
      <View>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View>
        <Text>First</Text>
        <RadioButton value="first" />
      </View>
      <View>
        <Text>Second</Text>
        <RadioButton value="second" />
      </View>
    </RadioButton.Group>
      </View>
      <View style={styles.div}>
        <Button style={styles.botao} mode="contained" onPress={open}>
          Enviar
        </Button>
      </View>
    </View>
  );
  }

