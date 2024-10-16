import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome from expo-vector-icons

import { createDrawerNavigator } from "@react-navigation/drawer";
import PosMainnetScreen from "../screens/pos/mainnet/PosMainnetScreen";
import StateSync from "../screens/pos/mainnet/StateSync";
import MissedCheckPoint from "../screens/pos/mainnet/MissedCheckpoint";
import HeimdallBlockHeight from "../screens/pos/mainnet/HeimdallBlockHeight";
import PosTestnetScreen from "../screens/pos/testnet/PosTestnetScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { useNavigation } from "@react-navigation/native";

// Create Drawer Navigators
const PosMainnetDrawer = createDrawerNavigator();
const PosTestnetDrawer = createDrawerNavigator();

const Drawer = createDrawerNavigator();

// Drawer Navigator for POS Mainnet Network Landinding
export function PosMainnetNavigator() {
  const navigation = useNavigation();
  return (
    <PosMainnetDrawer.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Dashboard"); // Navigate back to the WelcomeScreen
            }}
            style={{ marginRight: 10 }} // Adjust margin for positioning
          >
            <FontAwesome name="home" size={24} color="black" />
          </TouchableOpacity>
        ),
      }}>
      <PosMainnetDrawer.Screen name="Mainnet" component={PosMainnetScreen} />
      <PosMainnetDrawer.Screen
        name="MissedCheckPoint"
        component={MissedCheckPoint}
      />
      <PosMainnetDrawer.Screen name="StateSync" component={StateSync} />
      <PosMainnetDrawer.Screen
        name="HeimdallBlockHeight"
        component={HeimdallBlockHeight}
      />
    </PosMainnetDrawer.Navigator>
  );
}

// Drawer Navigator for POS Testnet Network Landing
export function PosTestnetNavigator() {
  const navigation = useNavigation();
  return (
    <PosTestnetDrawer.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Dashboard"); // Navigate back to the WelcomeScreen
            }}
            style={{ marginRight: 10 }} // Adjust margin for positioning
          >
            <FontAwesome name="home" size={24} color="black" />
          </TouchableOpacity>
        ),
      }}>
      <PosTestnetDrawer.Screen name="Testnet" component={PosTestnetScreen} />
    </PosTestnetDrawer.Navigator>
  );
}

// Drawer Navigator for zKEVM
export function ZkevmDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
