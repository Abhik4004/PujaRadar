import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

function Pandal({ puja }) {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(puja.likes || 0); // Initialize likes count

  function openURI() {
    const uri = puja.instagramAccount; // Assuming you want to link to Instagram
    Linking.openURL(`https://instagram.com/${uri}`).catch((err) =>
      alert("Link could not be accessed")
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: puja.image
              ? `data:image/jpeg;base64,${puja.image}` // Use base64 format for image
              : "https://via.placeholder.com/150", // Placeholder image
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{puja.clubName}</Text>
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
            Submitter: {puja.submitterName}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    marginRight: 10,
    fontSize: 16,
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
    fontSize: 16,
  },
  trendingText: {
    fontSize: 16,
    color: "#888",
  },
});

export default Pandal;
