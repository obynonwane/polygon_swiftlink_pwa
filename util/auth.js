import axios from "axios";
import { Platform } from "react-native";

const API_URL =
  Platform.OS === "android"
    ? "http://10.0.2.2:8080/api/v1/authentication/"
    : "http://localhost:8080/api/v1/authentication/";

export async function login(email, password) {
  const response = await axios.post(API_URL + "login", {
    email: email,
    password: password,
  });

  const token = response.data.data.access_token;
  return token;
}

export async function createUser(firstName, lastName, phone, email, password) {
  const response = await axios.post(API_URL + "signup", {
    first_name: firstName,
    last_name: lastName,
    phone: phone,
    email: email,
    password: password,
  });

  console.log(response.data);
  return response.data; // Return the data so the caller can use it
}
