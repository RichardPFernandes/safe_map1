import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { albun } from "../screens/albuns";
import { home } from "../screens/home";
import { sobre } from "../screens/sobre";

//const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <Tab.Navigator
      activeColor="#3e2465"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#F0F8FF" }}
    >
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Albuns"
        component={albun}
        options={{ 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="album" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Noticias"
        component={home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper-variant-multiple" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={sobre}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
