import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";

// Enable animation on Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const SignUpScreen: React.FC = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const revealEmailForm = () => {
    LayoutAnimation.easeInEaseOut();
    setShowEmailForm(true);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo */}
        <Image
          source={require("../../assets/AppLogo.png")}
          style={styles.logo}
        />

        

        {/* Google Button */}
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.iconCircle}>
            <Text style={{ fontSize: 22 }}>G</Text>
          </View>
          <Text style={styles.socialText}>Sign up with Google</Text>
        </TouchableOpacity>

        {/* Show divider + form only if email form is revealed */}
        {showEmailForm && (
          <>
            <View style={styles.dividerRow}>
              <View style={styles.line} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.line} />
            </View>

            {/* Email Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
              />
              <Text style={styles.eyeIcon}>👁️</Text>
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitText}>Sign up with email</Text>
            </TouchableOpacity>
          </>
        )}

        {/* Show reveal button first */}
        {!showEmailForm && (
          <TouchableOpacity style={styles.emailButton} onPress={revealEmailForm}>
            <Text style={styles.emailText}>Sign up with email</Text>
          </TouchableOpacity>
        )}

        {/* Sign in */}
        <Text style={styles.signIn}>
          Already have an account? <Text style={styles.signInLink}>Sign in</Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  logo: {
    width: 210,
    height: 100,
    resizeMode: "contain",
    marginBottom: 40,
    marginTop: 10,
  },

  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    marginTop: 50,
   
  },

  iconCircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    marginRight: 10,
  },

  socialText: {
    fontSize: 16,
    fontWeight: "600",
  },

  emailButton: {
    marginTop:10,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },

  emailText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  dividerRow: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },

  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#888",
  },

  inputContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 15,
  },

  inputLabel: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 5,
  },

  input: {
    fontSize: 16,
  },

  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 22,
    fontSize: 18,
    color: "#777",
  },

  submitButton: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 40,
    backgroundColor: "#00BBFF",
    marginTop: 10,
  },

  submitText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  signIn: {
    marginTop: 25,
    fontSize: 14,
    color: "#555",
  },

  signInLink: {
    color: "#ed787a",
    fontWeight: "700",
  },
});
