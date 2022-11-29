import * as React from "react";
import { Text, View } from "react-native";
import { Link, useNavigation, useRoute } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";
import { useState } from 'react';
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../services/firebaseConfig";

export function Senha() {
    firebase.initializeApp(firebaseConfig)
    const route = useRoute();
    const navigation = useNavigation();
    const [password, setPassword] = React.useState("");
    const [text1, setText1] = React.useState("");
    const [isPasswordSecure, setIsPasswordSecure] = React.useState(true);
    const [isPasswordSecure1, setIsPasswordSecure1] = React.useState(true);


    const handleClick = event => {
        event.preventDefault();

        if (password.trim().length < 5) {
    alert('é necessario que a senha tenha mais que 5 caracteres');
        } else if (password == text1) {
            signUp(), open()
        } else {
        alert('As senhas são diferentes');
        
        }
    }

    function open() {
        navigation.navigate("Concluir Cadastro");
    }
    function signUp() {
        firebase.auth()
            .createUserWithEmailAndPassword(route.params.email, password)
            .then(userCredential => {
                console.log('user: ', userCredential);
            })
            .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email já cadastrado');
            }
            if (error.code === 'auth/email-already-in-use') {
                alert('Email já cadastrado');
            }
        });
    }
  
    return (
        <View>
            <Text style={styles.tittle}>Insira a sua Senha</Text>
            <Text style={styles.text}>Sua sennha sera visivel somente para você</Text>
            <View style={{ alignItems: 'center', justifyContent: "center" }}>
                <View style={styles.left}>
                    <View>
                        <TextInput
                            style={styles.input1}
                            secureTextEntry={isPasswordSecure}
                            right={<TextInput.Icon icon="eye" onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }} />}
                            label="Senha"
                            mode='flat'
                            value={password}
                            onChangeText={password => setPassword(password)}
                        />
                        <TextInput
                            style={styles.input1}
                            secureTextEntry={isPasswordSecure1}
                            right={<TextInput.Icon icon="eye" onPress={() => { isPasswordSecure1 ? setIsPasswordSecure1(false) : setIsPasswordSecure1(true) }} />}
                            label="Confirme sua Senha"
                            mode='flat'
                            value={text1}
                            onChangeText={text1 => setText1(text1)}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.div}>
                <Button style={styles.botao} mode="contained" onPress={handleClick} >
                    Enviar
                </Button>
            </View>
        </View>
    );
};