import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../lib/styles";

export function FinalCadastro() {
    const navigation = useNavigation();
    function open() {
        navigation.navigate("Cadastro");
      }
    return (
        <View style={styles.div1}>
            <Text style={styles.tittle}>Cadastro Concluido</Text>
            <Text style={styles.text}>Agora você pode começar a usar o app</Text>
            <View style={styles.div1}>
                <Button style={{...styles.botao, backgroundColor: '#5ced73'}} mode="contained" onPress={open}>
                    Acessar
                </Button>
            </View>
        </View>
    )
}