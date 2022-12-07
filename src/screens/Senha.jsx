import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/styles";
import { useState } from 'react';
import { firebaseConfig } from "../services/firebaseConfig";
import firebase from "firebase/compat/app";

export function Senha() {
    firebase.initializeApp(firebaseConfig);
    const route = useRoute();
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
    const [passsword, setPassword] = React.useState("");
    const [isPasswordSecure, setIsPasswordSecure] = React.useState(true);
    const [isPasswordSecure1, setIsPasswordSecure1] = React.useState(true);


    const handleClick = event => {
        event.preventDefault();

        if (text.trim().length > 5 && passsword.trim().length > 5) {
            if (text !== passsword) {
                alert('As senhas não são iguais');
            } else {
                signUp()
            }
        } else {
            alert('é necessario que a senha tenha mais que 5 caracteres');
        }
    }

    function open() {
        navigation.navigate("Numero");
    }
    function signUp() {
        firebase.auth()
            .createUserWithEmailAndPassword(route.params.email, passsword)
            .then (() => {
                open();
    })
    .catch(error => {
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
                            value={passsword}
                            onChangeText={passsword => setPassword(passsword)}
                        />
                        <TextInput
                            style={styles.input1}
                            secureTextEntry={isPasswordSecure1}
                            right={<TextInput.Icon icon="eye" onPress={() => { isPasswordSecure1 ? setIsPasswordSecure1(false) : setIsPasswordSecure1(true) }} />}
                            label="Confirme sua Senha"
                            mode='flat'
                            value={text}
                            onChangeText={text => setText(text)}
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