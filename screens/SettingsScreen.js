import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.iconSide}>
            <FontAwesome name="beer" size={40} color="#333" />
          </View>
          <View style={styles.content}>
            <Text style={styles.description}>Enjoy a cold one.</Text>
            <View style={styles.line} />
            <Text style={styles.header}>Beer</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconSide}>
            <FontAwesome name="coffee" size={40} color="#333" />
          </View>
          <View style={styles.content}>
            <Text style={styles.description}>A morning boost.</Text>
            <View style={styles.line} />
            <Text style={styles.header}>Coffee</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconSide}>
            <FontAwesome name="apple" size={40} color="#333" />
          </View>
          <View style={styles.content}>
            <Text style={styles.description}>Fresh and healthy.</Text>
            <View style={styles.line} />
            <Text style={styles.header}>Apple</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconSide}>
            <FontAwesome name="car" size={40} color="#333" />
          </View>
          <View style={styles.content}>
            <Text style={styles.description}>Drive in style.</Text>
            <View style={styles.line} />
            <Text style={styles.header}>Car</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconSide}>
            <FontAwesome name="book" size={40} color="#333" />
          </View>
          <View style={styles.content}>
            <Text style={styles.description}>Dive into a story.</Text>
            <View style={styles.line} />
            <Text style={styles.header}>Book</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconSide}>
            <FontAwesome name="gamepad" size={40} color="#333" />
          </View>
          <View style={styles.content}>
            <Text style={styles.description}>Play your favorite games.</Text>
            <View style={styles.line} />
            <Text style={styles.header}>Game</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconSide}>
            <FontAwesome name="music" size={40} color="#333" />
          </View>
          <View style={styles.content}>
            <Text style={styles.description}>Listen to your tunes.</Text>
            <View style={styles.line} />
            <Text style={styles.header}>Music</Text>
          </View>
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
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    maxWidth: 300,
    marginBottom: 16,
    backgroundColor: "#fff",
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
    fontSize: 18,
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
});

export default SettingsScreen;
