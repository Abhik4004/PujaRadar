import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

// About Durga Puja
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.ringOuter}>
          <View style={styles.ringMiddle}>
            <View style={styles.ringInner}>
              <Image
                source={require("../assets/CoverImage.jpg")}
                style={styles.image}
              />
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.title}>Puja Radar</Text>
      <Text style={styles.description}>
        Durga Puja, a vibrant and spiritually rich festival, celebrates the
        victory of good over evil. It is a time when communities come together
        to worship Goddess Durga, enjoy cultural performances, and feast with
        loved ones.
      </Text>

      <TouchableOpacity
        style={styles.pillButton}
        onPress={() => navigation.navigate("Trending")}
        accessibilityLabel="Trending"
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Trending</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5E1", // Light cream background
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  ringOuter: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#FF7043", // Outer ring color
    padding: 10,
  },
  ringMiddle: {
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "#FFA726", // Middle ring color
    padding: 10,
  },
  ringInner: {
    borderRadius: 80,
    borderWidth: 4,
    borderColor: "#FFCC80", // Inner ring color
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60, // Makes the image circular
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#E78F81", // Darker pink for the title
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "#FFCFB3",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  description: {
    fontSize: 18,
    color: "#4A148C", // Dark purple for description
    textAlign: "justify",
    paddingHorizontal: 20,
    marginBottom: 30,
    lineHeight: 24,
  },
  pillButton: {
    backgroundColor: "#FF7043", // Orange button
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 35,
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
