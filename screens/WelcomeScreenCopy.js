import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import { AuthContext } from "../store/auth-context";

const API_URL =
  Platform.OS === "android"
    ? "http://10.0.2.2:8080/api/v1/authentication/"
    : "http://localhost:8080/api/v1/authentication/";

function WelcomeScreen() {
  const [fetchUser, setFetchuser] = useState([]);

  authCtx = useContext(AuthContext);
  token = authCtx.token;

  useEffect(() => {
    axios
      .get(API_URL + "all-users", {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setFetchuser(response.data.data); // Ensure it's an array
        } else {
          console.error("Expected array but got:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        authCtx.logout();
      });
  }, [token]);

  return (
    <>
      <View style={styles.rootContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <Text>You authenticated successfully!</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {fetchUser.length > 0 ? (
          fetchUser.map((user) => (
            <View key={user.id} style={styles.userCard}>
              <Text style={styles.userText}>
                Name: {user.first_name} {user.last_name}
              </Text>
              <Text style={styles.userText}>Email: {user.email}</Text>
              <Text style={styles.userText}>Phone: {user.phone}</Text>
            </View>
          ))
        ) : (
          <Text>No users found</Text>
        )}
      </ScrollView>
    </>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  userCard: {
    padding: 16,
    backgroundColor: "white",
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  userText: {
    fontSize: 16,
    marginBottom: 4,
  },
});
