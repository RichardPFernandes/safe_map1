import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export const albun = () => (
<ScrollView>
  <View>
    <View>
      <Text style={styles.titulo}>Albuns:</Text>
    </View>
    <View style={styles.div}>
      <Image
        source={{
          uri: "https://i.scdn.co/image/ab67616d0000b273d103c0ff0453a80a9d97dc16",
        }}
        style={styles.imagem}
      />
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-3z60A6299EOjfHVckNLjltExcNyj2CchYvUKGqKKJ-Dwdg_Oa_cIMuBlzLTSnETgTg&usqp=CAU",
        }}
        style={styles.imagem}
      />
      <Image
        source={{
          uri: "https://e.snmc.io/i/1200/s/033f7e096db74360ef2a3f936e73c281/2764852",
        }}
        style={styles.imagem}
      />
      <Image
        source={{
          uri: "https://media.pitchfork.com/photos/5929b38a5e6ef95969322490/1:1/w_320/5178b618.jpeg",
        }}
        style={styles.imagem}
      />
    </View>
  </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    margin: 24,
    fontSize: "60px",
  },
  imagem: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  div: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
