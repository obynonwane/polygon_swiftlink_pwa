import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

function HeimdallBlockHeightTestnet() {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Text>HeimdallBlockHeight Testnet Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
});

export default HeimdallBlockHeightTestnet;
