import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen"; // Import SplashScreen
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import IconButton from "./components/ui/IconButton";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignupScreen";
import PosScreen from "./screens/PosScreen";
import AggLayerScreen from "./screens/AggLayerScreen";
import MidenScreen from "./screens/MidenScreen";

import PosIcon from "./assets/pos.png";
import Logo from "./assets/poly_logo.jpg";
import AggLayerIcon from "./assets/agg.png";
import MidenLogo from "./assets/miden.png";
import ZkevmLogo from "./assets/zkevm.png";

import {
  PosMainnetNavigator,
  PosTestnetNavigator,
  ZkevmDrawerNavigator,
} from "./util/NavigationUtil";
import ZkevmScreen from "./screens/ZkevmScreen";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

// Keep the splash screen visible until we're ready
SplashScreen.preventAutoHideAsync();

// Stack Navigation: jsx function to hold login and register screen for unauthenticated screen
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

// BottomTab Navigation - jsx function to hold bottom tab when user logs-in
function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}>
      <BottomTab.Screen
        name="Dashboard"
        component={WelcomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={Logo} style={{ width: 30, height: 30 }} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="zKEVM"
        component={ZkevmScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={ZkevmLogo} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <BottomTab.Screen
        name="POS"
        component={PosScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={PosIcon} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AggLayer"
        component={AggLayerScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={AggLayerIcon} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Miden"
        component={MidenScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={MidenLogo} style={{ width: 30, height: 30 }} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Navigation container for all navigation
function Navigation() {
  const authCtx = useContext(AuthContext);
  // return (
  //   <NavigationContainer>
  //     {!authCtx.isAuthenticated && <AuthStack />}
  //     {authCtx.isAuthenticated && <AuthenticatedStack /> }
  //   </NavigationContainer>
  // );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!authCtx.isAuthenticated ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <>
            <Stack.Screen name="Main" component={AuthenticatedStack} />
            <Stack.Screen
              name="PosMainnetNavigator"
              component={PosMainnetNavigator}
            />
            <Stack.Screen
              name="PosTestnetNavigator"
              component={PosTestnetNavigator}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function  to check if auth token is available to autologin
function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken() {
      try {
        const storedToken = await AsyncStorage.getItem("token");

        if (storedToken) {
          authCtx.authenticate(storedToken);
        }
      } catch (error) {
        console.error("Failed to fetch token", error);
      } finally {
        setIsTryingLogin(false);
        SplashScreen.hideAsync(); // Hide the splash screen when ready
      }
    }
    fetchToken();
  }, []);

  if (isTryingLogin) {
    // You can return null here, as the splash screen is shown by default
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Navigation />
    </SafeAreaView>
  );
}

//main entrypoint of the app
export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#6a51ae" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.primary100, // Match the app's main background
  },
});
