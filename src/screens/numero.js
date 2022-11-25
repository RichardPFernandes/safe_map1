import React, { useState, useRef } from "react";
import { FirebaseRecaptchaVerifier, FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import { firebaseConfig } from "../services/setup";
import firebase from "firebase/compat/app";
import { Alert, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";



export function Numero() {
  firebase.initializeApp(firebaseConfig)
  const countryCode = "+55"
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
    setPhoneNumber('');
  };

  const confirmCode = () => {
    const credential = new firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth().signInWithCredential(credential)
      .then(() => {
        setCode('');
      })
      .catch((error) => {
        alert(error);
      })
    Alert.alert(
      'login sucesso'
    )
  }





  function open() {
    navigation.navigate("Cadastro");
  }
  return (
    <View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={styles.tittle}>Insira o seu numero de celular:</Text>
      <Text style={styles.text}>você precisará confirmar o código que enviaremos ao seu celular</Text>
      <View style={{ alignItems: 'center', justifyContent: "center" }}>
        <View style={styles.left}>
          <View>
            <TextInput
              style={styles.number}
              keyboardType="phone-pad"
              autoCompleteType="tel"
              label="Número"
              mode='flat'
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>
      </View>
      <View style={styles.div}>
        <Button style={styles.botao} mode="contained" onPress={sendVerification}>
          Enviar
        </Button>
        <View style={styles.div1}>
          <TextInput
            style={styles.number}
            keyboardType="number-pad"
            autoCompleteType="tel"
            label="Número"
            mode='flat'
            value={code}
            onChangeText={setCode}
          />
          <Button style={styles.botao1} mode="contained" onPress={confirmCode}>
            Enviar
          </Button>
        </View>
      </View>
    </View>
  );
};
