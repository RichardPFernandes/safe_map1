import { StyleSheet, Text, View } from "react-native";

export const sobre = () => (
    <View>
        <Text style={styles.titulo}>Sobre a banda:</Text>
    </View>
);

const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        margin: 24,
        fontSize: "60px",
      },     

});