import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/navigation/index.js";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}