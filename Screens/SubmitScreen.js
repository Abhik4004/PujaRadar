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
import { Ionicons, FontAwesome } from "react-native-vector-icons"; // Import the icons

const SubmitScreen = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [base64Image, setBase64Image] = useState("");

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
      setImage(pickedImageUri);
      const base64 = await FileSystem.readAsStringAsync(pickedImageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setBase64Image(base64);
    }
  };

  const handleSubmit = () => {
    const email = "master@example.com"; // Replace with the master email address
    const subject = "New Durga Puja Event Submission";
    const body = `
      Puja Name: ${name}
      Location: ${location}
      Description: ${description}
      Image (Base64): ${base64Image}
    `;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoLink).catch((err) => {
      Alert.alert("Error", "Unable to open email client.");
      console.error("Error opening email client: ", err);
    });

    setName("");
    setLocation("");
    setDescription("");
    setImage(null);
    setBase64Image("");
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
        placeholder="Puja Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.textArea}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
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
    color: "#FF5733", // Bright festive color
    marginBottom: 16,
    textAlign: "center",
    marginTop: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
    color: "#FFD700", // Golden text
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#FF5733", // Saffron color
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Slight transparency
  },
  textArea: {
    height: 100,
    borderColor: "#FF5733",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  imagePicker: {
    backgroundColor: "#DAA520", // Golden color for button
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
    color: "#1E90FF", // Blue color for links
    textDecorationLine: "underline", // Underline for clickable links
    marginLeft: 8, // Space between icon and text
  },
});

export default SubmitScreen;
