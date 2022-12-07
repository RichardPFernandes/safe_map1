import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useCallback } from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { styles } from '../lib/styles';

interface IAdress {
  cep?: string,
  logradouro?: string,
  bairro?: string,
  localidade?: string,
  uf?: string,
}
        

export function Cep() {
  const navigation = useNavigation();
  const [Number, setNumber] = useState("");
  const [adress, setAdress] = useState<IAdress>({
    cep: '',
    logradouro: '',
    localidade: '',
    bairro: '',
    uf: ''
  });
  function open() {
    navigation.navigate("Numero");
  }

  console.log(adress);

  const getAdressFromApi = useCallback(() => {
    fetch(`https://viacep.com.br/ws/${adress.cep}/json/`)
    .then(res => res.json())
    .then((data: IAdress) => setAdress({
      bairro: data.bairro,
      localidade: data.localidade,
      logradouro: data.logradouro,
      uf: data.uf
    })).catch(err => console.log('erro: ', err))
  }, [adress.cep])

  function handleClick() {
    if(adress.logradouro === undefined || adress.bairro === undefined || adress.localidade === undefined || adress.uf === undefined || Number === "") {
      console.log('CEP inválido');
    }
    else {
      navigation.navigate('Cpf');
    }

  }


  return (
    <View style={styles.div}>
      <View style={styles.div}>
        <Text style={styles.titlePage}>Endereço:</Text>
        
        <TextInput
          style={{...styles.number, marginTop: 20}}
          placeholder="Digite o seu CEP"
          onEndEditing={() => getAdressFromApi()}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            cep: text
          }))}
        />
        <TextInput
         style={{...styles.number, marginTop: 20}}
          placeholder="Rua"
          value={adress.logradouro}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            logradouro: text
          }))}
        />
            <TextInput
         style={{...styles.number, marginTop: 20}}
          placeholder="Numero"
          value={Number}
          onChangeText={Number => setNumber(Number)}
        />
        <TextInput
           style={{...styles.number, marginTop: 20}}
          placeholder="Bairro"
          value={adress.bairro}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            bairro: text 
          }))}
        />
        <TextInput
           style={{...styles.number, marginTop: 20}}
          placeholder="Cidade"
          value={adress.localidade}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            localidade: text
          }))}
        />
        <TextInput
           style={{...styles.number, marginTop: 20}}
          placeholder="UF"
          value={adress.uf}
          onChangeText={(text) => setAdress((old) => ({
            ...old,
            uf: text
          }))}
        />
        <View style={styles.div1}>
             <Button style={styles.botao} mode="contained" onPress={handleClick}>
          Enviar
        </Button>
        </View>
      </View>
    </View>
  );
}

