import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🌼 Puja Radar 🌼</Text>
      <Text style={styles.subtitle}>
        {`🌺 Your guide to festive celebrations! 🌺`}
      </Text>
      <Text style={styles.description}>
        📍 Discover the best pujas and events near you! 🎊
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.pillButtonGreen}
          onPress={() => navigation.navigate("Trending")}
          accessibilityLabel="Trending Events Button"
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pillButtonPurple}
          onPress={() => navigation.navigate("Login")}
          accessibilityLabel="Submit Event Button"
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.pillButtonOrange}
        onPress={() => navigation.navigate("Calender")}
        accessibilityLabel="Calendar Button"
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Check Calendar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8E1F4", // Light background for festive feel
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#C2185B", // Darker pink for the title
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "#E91E63",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#7B1FA2", // Purple for subtitle
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#4A148C", // Dark purple for description
    textAlign: "center",
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  pillButtonGreen: {
    backgroundColor: "#388E3C", // Green button for trending
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginRight: 10,
  },
  pillButtonPurple: {
    backgroundColor: "#8E24AA", // Purple button for submit
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  pillButtonOrange: {
    backgroundColor: "#FFA726", // Orange button for calendar
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default HomeScreen;
