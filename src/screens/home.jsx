import { Grid, TextField } from "@mui/material";
import { StyleSheet, Text, View } from "react-native";

export const home = () => (
  <View>
    <Text style={styles.tittle}>Digite seu nome:</Text>
    <Text style={styles.text}>o nome aparecerá no seu perfil</Text>
    <View style={styles.div}>
      <Grid style={styles.grid} container spacing={-1}>
        <Grid xs={6}>
        <TextField style={styles.input} id="outlined-basic" label="Nome" variant="outlined" />
        </Grid>
        <Grid>
        <TextField style={styles.input} id="outlined-basic" label="Sobrenome" variant="outlined" />
        </Grid>
      </Grid>
    </View>
  </View>
);

const styles = StyleSheet.create({
  tittle: {
    textAlign: "center",
    margin: 24,
    fontSize: "20px",
    marginTop: 200,
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    opacity: "50%",
  },
  input: {
    display: "flex",
    height: 20,
    width: 150,

  },
  div: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    alignItems: "center",
    margin: 50,
    paddingLeft: 50,
  
  }
});
