import React, { useState, useRef } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";




export function Cpf() {
    const navigation = useNavigation();
    const [Cpf, setCpf] = useState("")
    const [checkValidCpf, setCheckValidCpf] = useState(false)
    const handleCheckCpf = (text) => {
      let regex  = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/

    
 


      setCpf(text);
      if(regex.test(text)){
        setCheckValidCpf(false);
      }
      else{
        setCheckValidCpf(true);
      }
    }
    function handleClick () {
      if (Cpf.trim().length > 5) {
         open()
      } else {
          alert('Cpf Invalido');
      }
  }

  function open() {
    navigation.navigate("Email");
  }
  return (
    <View>
      <Text style={styles.tittle}>Insira o seu CPF:</Text>
      <Text style={styles.text}>Seu CPF será visivel somente para você</Text>
      <View style={{ alignItems: 'center', justifyContent: "center" }}>
        <View style={styles.left}>
          <View>
            <TextInput
              style={styles.number}
              keyboardType="numeric"
              label="CPF"
              mode='flat'
              value={Cpf}
              onChangeText={(text)=>handleCheckCpf(text)}
            />
          </View>
        </View>
      </View>
      <View style={styles.div}>
        <Button style={styles.botao} mode="contained" onPress={()=> {checkValidCpf ? (alert('Cpf invalido')) : handleClick() }} >
          Enviar
        </Button>
      </View>
    </View>
  );
};
