import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";

export function Home() {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");
  const [text1, setText1] = React.useState("");
  const [isPasswordSecure, setIsPasswordSecure] = React.useState(true);

  //fun

  function openLogin() {
    navigation.navigate("Senha");
  }

  function openCadastro() {
    navigation.navigate("Cadastro");
  }
  return (
    <View>
      <View style={styles.container1}>
        <View style={styles.div}>
          <TextInput
            style={styles.input1}
            keyboardType="email-address"
            label="Email"
            mode="flat"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </View>
        <View style={styles.div}>
          <TextInput
            style={styles.input1}
            secureTextEntry={isPasswordSecure}
            right={
              <TextInput.Icon
                icon="eye"
                onPress={() => {
                  isPasswordSecure
                    ? setIsPasswordSecure(false)
                    : setIsPasswordSecure(true);
                }}
              />
            }
            label="Senha"
            mode="flat"
            value={text1}
            onChangeText={(text1) => setText1(text1)}
          />
        </View>
        <View style={styles.div}>
          <Button style={styles.botao1} mode="contained" onPress={doLogin}>
            Enviar
          </Button>
        </View>
        <View style={styles.div}>
          <Text style={{ color: "#0066FF" }} onPress={openLogin}>
            Esqueceu a senha?
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#8e8e8e",
              alignSelf: "center",
              margin: 20,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              paddingHorizontal: 3,
              fontSize: 17,
              color: "#8e8e8e",
            }}
          >
            OU
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#8e8e8e",
              alignSelf: "center",
              margin: 20,
            }}
          />
        </View>
        <View style={styles.div}>
          <Button
            style={{ ...styles.botao1, backgroundColor: "#5ced73" }}
            mode="contained"
            onPress={openCadastro}
          >
            Criar conta nova
          </Button>
        </View>
      </View>
    </View>
  );
}
