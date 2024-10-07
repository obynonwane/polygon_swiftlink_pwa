import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ZkevmLogo from "../assets/zkevm.png";

export default function ZkevmScreen() {
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
          <Image source={ZkevmLogo} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={styles.cardHeader}>zKEVM Main Network</Text>
        <Text style={styles.cardDescription}>Beta network</Text>
      </Pressable>

      {/* Card 2 */}
      <Pressable style={styles.card} onPress={handlePressTwo}>
        <View style={styles.iconContainer}>
          <Image source={ZkevmLogo} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={styles.cardHeader}>zKEVM Test Network</Text>
        <Text style={styles.cardDescription}>Cardona network</Text>
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
