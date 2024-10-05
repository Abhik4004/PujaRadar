import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

function Pandal({ puja, navigation }) {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(puja.likes);

  function openURI() {
    const uri = puja.mapLocation;
    Linking.openURL(uri).catch((err) => alert("Link could not be accessed"));
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: puja.image.startsWith("data:image/") ? puja.image : puja.image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{puja.name}</Text>
        <View
          style={{ display: "flex", flexDirection: "row", marginBottom: 4 }}
        >
          <Text style={styles.location}>{puja.location}</Text>
          <EvilIcons
            name="location"
            size={20}
            color="#D32F2F"
            onPress={() => openURI()}
          />
        </View>

        <View style={styles.likeTrendingContainer}>
          <View style={styles.likeContainer}>
            {like ? (
              <AntDesign
                name="like1"
                size={20}
                color="#D32F2F"
                onPress={() => {
                  setLike(false);
                  setLikeCount(likeCount - 1);
                }}
              />
            ) : (
              <AntDesign
                name="like2"
                size={20}
                color="#D32F2F"
                onPress={() => {
                  setLike(true);
                  setLikeCount(likeCount + 1);
                }}
              />
            )}

            <Text style={styles.likesText}>Likes: {likeCount}</Text>
          </View>
          <Text style={styles.trendingText}>
            Trending: #{puja.trendingPosition}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF3E0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    marginBottom: 10, // Added margin to separate the image from the text
  },
  image: {
    width: "100%", // Changed to full width of the container
    height: 180,
    borderRadius: 8,
  },
  infoContainer: {
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5D4037",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#5D4037",
    marginBottom: 10,
  },
  likeTrendingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likesText: {
    marginLeft: 5,
    color: "#D32F2F",
    fontSize: 14,
  },
  trendingText: {
    color: "#F57C00",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Pandal;
