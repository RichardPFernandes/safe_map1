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
            <Text style={styles.text}>Redirecionando você ao mapa</Text>
            <Text style={styles.text}>Aguarde um momento</Text>
            <Text style={styles.text}> caso não seja redirecinado, aperte o botão:</Text>
            <Button style={styles.button} mode="contained" onPress={open}>
                Ir para o mapa
            </Button>
            <View style={styles.div1}>
            </View>
        </View>
    )
}