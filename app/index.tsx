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
  className="mb-6"
  style={{ width: 224, height: 224 }} // twice 112
  resizeMode="contain"
/>

      {/* App Name */}
      <Text className="text-3xl font-bold text-neutral-900 mb-1">
        Altavia
      </Text>

      {/* Slogan */}
      <Text className="text-base text-gray-600">
        Your AI-powered travel planning Assistant"
      </Text>
    </SafeAreaView>
  );
}
