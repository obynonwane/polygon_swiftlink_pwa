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
import Logo from "../assets/endless_11524166.png";
import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";
import { AuthContext } from "../store/auth-context";
import { login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  // state for managing login credentials
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigation = useNavigation();

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  const { height } = useWindowDimensions();

  // handler to trigger login action for user
  const onSignInPressed = async () => {
    let valid = true;

    // Email validation
    if (!email.includes("@gmail.com")) {
      setEmailError("Email must be a '@gmail.com' address.");
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

    if (!valid) return;

    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      setIsAuthenticating(false);
      Alert.alert("Authentication failed", error.response.data.message);
    }
  };

  const onForgotPasswordPressed = () => {
    console.log(password);
    console.warn("onForgotPasswordPressed");
  };

  const onSignUpPressed = () => {
    navigation.replace("Signup");
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
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

        <CustomButton onPress={onSignInPressed} text="Sign In" />
        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot password?"
          type="TERTIARY"
        />

        <CustomButton
          onPress={onSignUpPressed}
          text="Don't have an account? Create One"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

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
});
