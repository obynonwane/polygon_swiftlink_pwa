// InfoCard.js
import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

function InfoCard({
  icon: IconComponent,
  iconName,
  iconSize,
  iconColor,
  title,
  data,
  footerText,
  onPress,
}) {
  return (
    <View
      style={[styles.card, Platform.OS === "web" && { cursor: "pointer" }]}
      onClick={Platform.OS === "web" ? onPress : undefined}
      onPress={Platform.OS !== "web" ? onPress : undefined}>
      <View style={styles.iconSide}>
        <IconComponent name={iconName} size={iconSize} color={iconColor} />
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>{title}</Text>
        <View style={styles.line} />
        <Text style={styles.header}>{data}</Text>
        <Text style={styles.footerText}>{footerText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    width: "90%",
    maxWidth: 300,
    ...(Platform.OS === "web" ? { cursor: "pointer" } : {}), // Web-specific style
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

export default InfoCard;
