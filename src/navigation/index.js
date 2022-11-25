import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// // import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cadastro } from "../screens/Cadastro";
import { Data } from "../screens/Data";
import { Email } from "../screens/Email";
import { Genero } from "../screens/Genero";
import { Home } from "../screens/Home";
import { Numero } from "../screens/numero";
import setup from '../services/setup'

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
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Data"
        component={Data}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Genero"
        component={Genero}
        options={{
          headerShown: false,
        }}

      />
      <Stack.Screen
        name="Numero"
        component={Numero}
        options={{
          headerShown: false,
        }}

      />
      <Stack.Screen
        name="Email"
        component={Email}
        options={{
          headerShown: false,
        }}

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
