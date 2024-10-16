import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

function MissedCheckpoint() {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Text>MissedCheckpoint Screen</Text>
    </View>
  );
}

export default MissedCheckpoint;
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
});
