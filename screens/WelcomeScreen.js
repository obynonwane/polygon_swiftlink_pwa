import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import {
  FontAwesome,
  Entypo,
  Octicons,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

function WelcomeScreen() {
  const { width } = useWindowDimensions();

  const handleCardPress = (header) => {
    alert(`You pressed the card: ${header}`);
  };

  const isLargeScreen = width > 768;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={[
            styles.cardsContainer,
            isLargeScreen && styles.largeScreenContainer,
          ]}>
          <TouchableOpacity
            style={[styles.card, isLargeScreen && styles.largeCard]}
            onPress={() => handleCardPress("77")}>
            <View style={styles.iconSide}>
              <Entypo name="bar-graph" size={40} color="#333" />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>Missed Checkpoints.</Text>
              <View style={styles.line} />
              <Text style={styles.header}>77</Text>
              <Text style={styles.footerText}>POS chain</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, isLargeScreen && styles.largeCard]}
            onPress={() => handleCardPress("120")}>
            <View style={styles.iconSide}>
              <Ionicons name="receipt" size={40} color="#333" />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>Pending Transactions</Text>
              <View style={styles.line} />
              <Text style={styles.header}>120</Text>
              <Text style={styles.footerText}>zKEVM</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, isLargeScreen && styles.largeCard]}
            onPress={() => handleCardPress("v1.2.3")}>
            <View style={styles.iconSide}>
              <Octicons name="versions" size={40} color="#333" />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>Bor Version</Text>
              <View style={styles.line} />
              <Text style={styles.header}>v1.2.3</Text>
              <Text style={styles.footerText}>POS Chain</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, isLargeScreen && styles.largeCard]}
            onPress={() => handleCardPress("10")}>
            <View style={styles.iconSide}>
              <FontAwesome name="chain" size={40} color="#333" />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>Connected Chains</Text>
              <View style={styles.line} />
              <Text style={styles.header}>10</Text>
              <Text style={styles.footerText}>Agg Layer</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, isLargeScreen && styles.largeCard]}
            onPress={() => handleCardPress("100")}>
            <View style={styles.iconSide}>
              <FontAwesome6 name="bridge-circle-check" size={40} color="#333" />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>Waiting Transaction</Text>
              <View style={styles.line} />
              <Text style={styles.header}>100</Text>
              <Text style={styles.footerText}>Bridging Portal</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, isLargeScreen && styles.largeCard]}
            onPress={() => handleCardPress("200")}>
            <View style={styles.iconSide}>
              <MaterialIcons name="sms-failed" size={40} color="#333" />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>Failed Transaction</Text>
              <View style={styles.line} />
              <Text style={styles.header}>200</Text>
              <Text style={styles.footerText}>zKEVM</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  cardsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  largeScreenContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    width: "90%", // Make the card width responsive on mobile
    maxWidth: 300, // Cap the maximum width on mobile
  },
  largeCard: {
    width: "45%", // Adjust width for larger screens
    maxWidth: 400, // Cap the max width on large screens
  },
  iconSide: {
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  header: {
    margin: 0,
    fontSize: 24,
    color: "#333",
  },
  description: {
    marginVertical: 8,
    color: "#666",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 8,
  },
  footerText: {
    marginTop: 8,
    fontSize: 12,
    color: "#aaa",
    textAlign: "right",
  },
});

export default WelcomeScreen;
