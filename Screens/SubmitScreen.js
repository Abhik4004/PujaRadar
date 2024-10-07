import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator"; // Import the image manipulator
import { Ionicons, FontAwesome } from "react-native-vector-icons";

const SubmitScreen = () => {
  const [clubName, setClubName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [base64Image, setBase64Image] = useState("");
  const [submitterName, setSubmitterName] = useState("");
  const [instagramAccount, setInstagramAccount] = useState("");

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const pickedImageUri = result.assets[0].uri;

      // Set the selected image URI
      setImage(pickedImageUri);

      // Compress the image
      const manipulatedImage = await ImageManipulator.manipulateAsync(
        pickedImageUri,
        [{ resize: { width: 400, height: 400 } }], // Resize to width of 800px, maintain aspect ratio
        { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG } // Compress to 70%
      );

      // Convert to base64
      const base64 = await FileSystem.readAsStringAsync(manipulatedImage.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setBase64Image(base64);
    }
  };

  const handleSubmit = async () => {
    // Validation
    if (
      !clubName ||
      !location ||
      !submitterName ||
      !instagramAccount ||
      !base64Image
    ) {
      Alert.alert("Error", "Please fill in all fields and select an image.");
      return;
    }

    const eventData = {
      clubName,
      location,
      submitterName,
      instagramAccount,
      image: base64Image,
      createdAt: new Date().toISOString(),
    };

    const API_URL = "https://sheetdb.io/api/v1/8s4wnq6uu5yg7"; // Your SheetDB endpoint

    // Log the data being sent to the API
    console.log("Submitting data:", JSON.stringify(eventData, null, 2)); // Pretty print the JSON data

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: eventData }), // Wrap your data in a "data" object
      });

      // Log response status
      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response from SheetDB:", errorText);
        Alert.alert("Error", "Failed to submit your data. Please try again.");
        return;
      }

      const responseData = await response.json();
      // Log the response data
      console.log("Response data:", responseData);

      Alert.alert("Success", "Your submission has been recorded!");

      // Clear form inputs
      setClubName("");
      setLocation("");
      setImage(null);
      setBase64Image("");
      setSubmitterName("");
      setInstagramAccount("");
    } catch (error) {
      console.error("Error submitting data to SheetDB:", error);
      Alert.alert("Error", "There was a problem submitting your data.");
    }
  };

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => {
      Alert.alert("Error", "Unable to open link.");
      console.error("Error opening link: ", err);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Submit Durga Puja Event</Text>
      <TextInput
        style={styles.input}
        placeholder="Club/Pandal Name"
        value={clubName}
        onChangeText={setClubName}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={submitterName}
        onChangeText={setSubmitterName}
      />
      <TextInput
        style={styles.input}
        placeholder="Instagram Account"
        value={instagramAccount}
        onChangeText={setInstagramAccount}
      />
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>
          {image ? "Change Image" : "Select Image"}
        </Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Contact Details */}
      <View style={styles.contactContainer}>
        <Text style={styles.subtitle}>Contact Us:</Text>
        <TouchableOpacity
          style={styles.contactText}
          onPress={() => openLink("mailto:ghoshabhik4002@gmail.com")}
        >
          <Ionicons name="mail" size={20} color="#1E90FF" />
          <Text style={styles.contactTextValue}>
            Email: ghoshabhik4002@gmail.com
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactText}
          onPress={() =>
            openLink("https://www.linkedin.com/in/abhik-ghosh-27b3632a0/")
          }
        >
          <FontAwesome name="linkedin" size={20} color="#1E90FF" />
          <Text style={styles.contactTextValue}>LinkedIn: abhik-ghosh</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactText}
          onPress={() =>
            openLink("https://www.instagram.com/artgo_2004/?__pwa=1")
          }
        >
          <FontAwesome name="instagram" size={20} color="#1E90FF" />
          <Text style={styles.contactTextValue}>Instagram: artgo_2004</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF5733",
    marginBottom: 16,
    textAlign: "center",
    marginTop: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
    color: "#FFD700",
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#FF5733",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  imagePicker: {
    backgroundColor: "#DAA520",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 12,
  },
  imagePickerText: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginVertical: 8,
    borderRadius: 10,
    borderColor: "#FF5733",
    borderWidth: 2,
  },
  submitButton: {
    backgroundColor: "#FF5733",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  contactContainer: {
    marginTop: 20,
    alignItems: "flex-start",
  },
  contactText: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  contactTextValue: {
    fontSize: 16,
    color: "#1E90FF",
    textDecorationLine: "underline",
    marginLeft: 8,
  },
});

export default SubmitScreen;
