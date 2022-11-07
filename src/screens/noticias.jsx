import { Text, View } from "react-native";

export const noticias= () => (
    <View>
        <Text style={styles.titulo}>Boas vindas</Text>
    </View>
);

const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        margin: 24,
        fontSize: "60px",
      },     

});