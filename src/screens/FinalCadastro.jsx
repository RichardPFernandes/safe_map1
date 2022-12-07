import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

import { styles } from "../lib/styles";

export function FinalCadastro() {
    const navigation = useNavigation();
    function open() {
        navigation.navigate("RootApp");
      }
    return (
        <View style={styles.div1}>
            <Text style={styles.tittle}>Cadastro Concluido</Text>
            <Text style={styles.text}>Clique no botão abaixo para acessar o mapa</Text>
            <View style={styles.div1}>
            <Button style={styles.botao} mode="contained" onPress={open}>
                Ir para o mapa
            </Button>
            </View>
            <View style={styles.div1}>
            </View>
        </View>
    )
}