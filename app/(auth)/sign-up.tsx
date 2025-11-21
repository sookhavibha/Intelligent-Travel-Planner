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

        {/* Facebook Button */}
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.iconCircle}>
            <Text style={{ color: "#1877F2", fontSize: 22 }}>f</Text>
          </View>
          <Text style={styles.socialText}>Sign up with Facebook</Text>
        </TouchableOpacity>

        {/* Google Button */}
        <TouchableOpacity style={styles.socialButton}>
          <View style={styles.iconCircle}>
            <Text style={{ fontSize: 22 }}>G</Text>
          </View>
          <Text style={styles.socialText}>Sign up with Google</Text>
        </TouchableOpacity>

        {/* Divider appears only when email form is shown */}
        {showEmailForm && (
          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>
        )}

        {/* Email form */}
        {showEmailForm && (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Password"
              />
              <Text style={styles.eyeIcon}>👁️</Text>
            </View>

            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitText}>Sign up with email</Text>
            </TouchableOpacity>
          </>
        )}

        {/* Main "Sign up with email" button when form is hidden */}
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
    height: 80,
    resizeMode: "contain",
    marginBottom: 40,
    marginTop:10,
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
    marginTop: 30,
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
    color: "#00BBFF",
    fontWeight: "700",
  },
});
