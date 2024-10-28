import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

function MissedCheckpointTestnet() {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Text>MissedCheckpoint Testnet Screen</Text>
    </View>
  );
}

export default MissedCheckpointTestnet;
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
});
