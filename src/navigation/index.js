import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// // import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cadastro } from "../screens/Cadastro";
import { Cep } from "../screens/Cep";
import { Cpf } from "../screens/Cpf";
import { Data } from "../screens/Data";
import { Email } from "../screens/Email";
import { FinalCadastro } from "../screens/FinalCadastro";
import { Genero } from "../screens/Genero";
import { Home } from "../screens/Home";
import { MapaSeguro } from "../screens/MapaSeguro";
import { Numero } from "../screens/Numero";
import { Senha } from "../screens/Senha";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import setup from "../services/firebaseConfig";
import { Splash } from "../screens/Splash";
import { LogOut } from "../screens/Logout";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Data" component={Data} />
      <Stack.Screen name="Cep" component={Cep} />
      <Stack.Screen name="Cpf" component={Cpf} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Senha" component={Senha} />
      <Stack.Screen name="Concluir Cadastro" component={FinalCadastro} />
      <Stack.Screen name="Numero" component={Numero} />
      {/* <Stack.Screen name="Genero" component={Genero} /> */}
      <Stack.Screen
        name="RootApp"
        component={RootApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export const RootApp = () => {
  return (
    <Tab.Navigator
      activeColor="#3e2465"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#F0F8FF" }}
    >
      <Tab.Screen
        name="Mapa Seguro"
        component={MapaSeguro}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map-marker-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Sobre"
        component={MapaSeguro}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogOut}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
