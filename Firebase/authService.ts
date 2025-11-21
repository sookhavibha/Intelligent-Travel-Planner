import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithCredential,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./config";

WebBrowser.maybeCompleteAuthSession();

export const signUpEmail = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginEmail = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// GOOGLE SIGN IN
export const useGoogleAuth = () => {
  return Google.useAuthRequest({
    iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
    webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  });
};

export const googleLoginWithFirebase = async (idToken: string) => {
  const provider = new GoogleAuthProvider();
  const credential = GoogleAuthProvider.credential(idToken);
  return signInWithCredential(auth, credential);
};
