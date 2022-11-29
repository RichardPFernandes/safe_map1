import { useNavigation } from "@react-navigation/native";
import { Text, View,  ImageBackground, Image } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../lib/styles";
export function PaginaInicial(){
    const navigation = useNavigation();
    function open() {
        navigation.navigate('Mapa')
    }

    return (
        <View>
              <ImageBackground source={require('../cidadenoite2.jpg')} resizeMode='cover' style={{height: 1000,}}>
              <Text style={{...styles.tittle, textShadowOffset:{width: 2, height: 2} ,textShadowRadius: 10, textShadowColor: '#565656', fontSize: 50, }}>SAFE MAP</Text>
        <View style={styles.div}>
        <Text style={{...styles.text, textAlign:'center', width: 300, justifyContent: 'center' ,alignItems: 'center'}}>Essa aplicação foi desenvolvida com intuito de gerar
        maior segurança para as mulheres e pessoas que se identificam com esse gênero ao circular pelas
        ruas do Brasil.</Text>
        <Image source={require('../locsemfundo.png')} style={{width: 100, height: 100,}}/>
        </View>
        <View style={styles.div}>
            <Button style={styles.botao} mode="contained" onPress={open}>
            Acessar o Mapa
            </Button>
        </View>
         </ImageBackground>
        </View>
    );

}