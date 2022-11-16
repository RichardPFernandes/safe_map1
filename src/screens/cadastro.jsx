import * as React from "react";
import { Grid, TextField } from "@mui/material";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { styles } from "../lib/styles";

export function cadastro() {
  const navigation = useNavigation();

  function open() {
    navigation.navigate("Data");
  }
  return (
    <View>
      <Text style={styles.tittle}>Digite seu nome:</Text>
      <Text style={styles.text}>o nome aparecerá no seu perfil</Text>
      <View style={styles.div}>
        <Grid style={styles.grid} container spacing={-1}>
          <Grid xs={6}>
            <TextField
              style={styles.input}
              id="standard-basic"
              label="Nome"
              variant="filled"
            />
          </Grid>
          <Grid>
            <TextField
              style={styles.input}
              id="outlined-basic"
              label="Sobrenome"
              variant="filled"
            />
          </Grid>
        </Grid>
      </View>
      <View style={styles.div}>
        <Button style={styles.botao} mode="contained" onPress={open}>
          Enviar
        </Button>
      </View>
    </View>
  );
};
