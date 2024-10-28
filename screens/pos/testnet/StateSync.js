import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

function StateSyncTestnet() {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Text>StateSync Testnet Screen</Text>
    </View>
  );
}

export default StateSyncTestnet;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
});
