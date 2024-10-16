import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

function PosMainnetScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Text>Mainnet Screen</Text>
    </View>
  );
}

export default PosMainnetScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
});
