import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// // import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { cadastro } from "../screens/cadastro";
import { data } from "../screens/data";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cadastro"
        component={cadastro}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Data"
        component={data}
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
