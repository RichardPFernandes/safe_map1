import React, { useState, useRef } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";



export function Email() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [checkValidEmail, setCheckValidEmail] = useState(false)
    const handleCheckEmail = (text) => {
      let re = /\S+@\S+\.\S+/;
      let regex  = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6} $/im;
    
 


      setEmail(text);
      if(re.test(text) || regex.test(text)){
        setCheckValidEmail(false);
      }
      else{
        setCheckValidEmail(true);
      }
    }
    function handleClick () {
      if (email.trim().length > 5) {
         open()
      } else {
          alert('Email Invalido');
      }
  }

  function open() {
    navigation.navigate("Senha",{email: email});
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
              keyboardType="email-address"
              label="Email"
              mode='flat'
              value={email}
              onChangeText={(text)=>handleCheckEmail(text)}
            />
          </View>
        </View>
      </View>
      <View style={styles.div}>
        <Button style={styles.botao} mode="contained" onPress={()=> {checkValidEmail ? (alert('Email invalido')) : handleClick() }} >
          Enviar
        </Button>
      </View>
    </View>
  );
};
