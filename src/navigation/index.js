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
import { Mapa } from "../screens/Mapa";
import { Numero } from "../screens/numero";
import { PaginaInicial } from "../screens/PaginaInicial";
import { Senha } from "../screens/Senha";
import setup from '../services/firebaseConfig'

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}

      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
      />
      <Stack.Screen
        name="Data"
        component={Data}
      />
      <Stack.Screen
        name="Genero"
        component={Genero}
      />
      <Stack.Screen
        name="Numero"
        component={Numero}
      />
      <Stack.Screen
        name="Email"
        component={Email}
      />
      <Stack.Screen
        name="Senha"
        component={Senha}
      />
      <Stack.Screen
        name="Cep"
        component={Cep}
      />
      <Stack.Screen
        name="Cpf"
        component={Cpf}
      />
         <Stack.Screen
        name="Concluir Cadastro"
        component={FinalCadastro}
      />
          <Stack.Screen
        name="Pagina Inicial"
        component={PaginaInicial}
      />
       <Stack.Screen
        name="Mapa"
        component={Mapa}
      />


    </Stack.Navigator>
  );
};
// export const RootNavigation = () => {
//   return (
//     <Tab.Navigator
//       activeColor="#3e2465"
//       inactiveColor="#3e2465"
//       barStyle={{ backgroundColor: "#F0F8FF" }}
//     >

//       <Tab.Screen
//         name="Albuns"
//         component={albun}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="album" color={color} size={26} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Sobre"
//         component={sobre}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="information-outline" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
