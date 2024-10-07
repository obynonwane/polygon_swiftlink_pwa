import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  Alert,
} from "react-native";

import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";
import { AuthContext } from "../store/auth-context";
import { login } from "../util/auth";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  // state for managing login credentials
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");

  const navigation = useNavigation();

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  const { height } = useWindowDimensions();

  // handler to trigger login action for user
  const onSignUpPressed = async () => {
    let valid = true;

    //clear error

    // Firstname validation
    if (firstName.length < 1) {
      setFirstNameError("Firstname must not be empty");
      valid = false;
    } else {
      setFirstNameError("");
    }

    // LastName validation
    if (lastName.length < 1) {
      setLastNameError("Lastname must not be empty");
      valid = false;
    } else {
      setLastNameError("");
    }

    // LastName validation
    if (phone.length < 1) {
      setPhoneError("Phone must not be empty");
      valid = false;
    } else {
      setPhoneError("");
    }

    // Email validation
    if (!email.includes("@gmail.com")) {
      setEmailError("Email must be a '@polygon.technology' address.");
      valid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (repeatPassword !== password) {
      setRepeatPasswordError(
        "Confirm password and password supplied do not match"
      );
      valid = false;
    } else {
      setRepeatPasswordError("");
    }

    if (!valid) return;

    setIsAuthenticating(true);
    try {
      const user = await createUser(
        firstName,
        lastName,
        phone,
        email,
        password
      );

      Alert.alert("Account Succefully created", user.message);
      navigation.replace("Login");
    } catch (error) {
      console.log(error.response, "error log");
      Alert.alert("Error signing up user", error.response.data.message);
      setIsAuthenticating(false);
    }
  };

  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
  };
  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };
  const onSignInApple = () => {
    console.warn("onSignInApple");
  };

  const onSignInPressed = () => {
    navigation.replace("Login");
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          placeholder="Firstname"
          value={firstName}
          setValue={setFirstName}
        />
        {firstNameError ? (
          <Text style={styles.errorText}>{firstNameError}</Text>
        ) : null}

        <CustomInput
          placeholder="Lastname"
          value={lastName}
          setValue={setLastName}
        />
        {lastNameError ? (
          <Text style={styles.errorText}>{lastNameError}</Text>
        ) : null}

        <CustomInput
          placeholder="Phone"
          value={phone}
          setValue={setPhone}
          keyboardType="phone-pad"
        />
        {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        <CustomInput
          placeholder="Confirm Password"
          value={repeatPassword}
          setValue={setRepeatPassword}
          secureTextEntry
        />
        {repeatPasswordError ? (
          <Text style={styles.errorText}>{repeatPasswordError}</Text>
        ) : null}

        <CustomButton onPress={onSignUpPressed} text="Register" />

        <CustomButton
          onPress={onSignInPressed}
          text="Login Instead"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    maxWidth: 300,
    maxHeight: 200,
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
  },
});
