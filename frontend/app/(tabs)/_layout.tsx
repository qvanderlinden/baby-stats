import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "pink",
          tabBarLabel: ({ focused, color, children }) => (
            <Text
              style={{
                fontWeight: focused ? "bold" : undefined,
                color,
              }}
            >
              {children}
            </Text>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Historique",
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={focused ? "baby-bottle" : "baby-bottle-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="stats"
          options={{
            title: "Statistiques",
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "stats-chart" : "stats-chart-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
