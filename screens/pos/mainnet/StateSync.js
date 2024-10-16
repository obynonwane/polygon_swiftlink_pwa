import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

function StateSync() {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Text>StateSync Screen</Text>
    </View>
  );
}

export default StateSync;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
});
