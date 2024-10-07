import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MidenLogo from "../assets/miden.png";

export default function MidenScreen() {
  const navigation = useNavigation();

  const handlePressOne = () => {
    navigation.navigate("PosMainnetNavigator");
  };

  const handlePressTwo = () => {
    navigation.navigate("PosTestnetNavigator");
  };

  return (
    <View style={styles.container}>
      {/* Card 1 */}
      <Pressable style={styles.card} onPress={handlePressOne}>
        <View style={styles.iconContainer}>
          <Image source={MidenLogo} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={styles.cardHeader}>Miden Main Network</Text>
        <Text style={styles.cardDescription}>Miden network</Text>
      </Pressable>

      {/* Card 2 */}
      <Pressable style={styles.card} onPress={handlePressTwo}>
        <View style={styles.iconContainer}>
          <Image source={MidenLogo} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={styles.cardHeader}>Miden Test Network</Text>
        <Text style={styles.cardDescription}>Miden network</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    width: 300,
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 15,
  },
  cardHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  cardDescription: {
    marginTop: 8,
    fontSize: 16,
    color: "#777",
  },
});
