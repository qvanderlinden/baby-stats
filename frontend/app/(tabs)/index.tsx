import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.plusButton}>
        <AntDesign name="plus" size={32} />
      </Pressable>
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
    padding: 16,
    backgroundColor: "pink",
    borderRadius: "50%",
  },
});
