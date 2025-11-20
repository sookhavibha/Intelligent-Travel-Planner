import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function WelcomeScreen() {
  // const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.replace("/(auth)/sign-up");
  //   }, 2500);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center px-100">
      {/* Logo */}
      <Image
  source={require("../assets/Altavia logo.png")}
  className="mb-1"
  style={{ width: 224, height: 224 }} // twice 112
  resizeMode="contain"
/>

      {/* App Name */}
      <Text className="text-6xl font-bold text-text-primary mb-1.5">
        Altavia
      </Text>

      {/* Slogan */}
      <Text className="text-base text-gray-900">
        Your AI-powered travel planning Assistant
      </Text>
    </SafeAreaView>
  );
}
