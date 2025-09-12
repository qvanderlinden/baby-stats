import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function History() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href="/form" asChild prefetch>
        <Pressable style={styles.plusButton}>
          <AntDesign name="plus" size={32} />
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plusButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    padding: 12,
    backgroundColor: "pink",
    borderRadius: "50%",
  },
});
