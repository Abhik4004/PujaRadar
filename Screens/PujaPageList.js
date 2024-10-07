import { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native";
import Pandal from "./Pandal";

function PujaPageList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sheetdb.io/api/v1/8s4wnq6uu5yg7",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setData(jsonData);
        console.log("Fetched data:", jsonData); // Log the fetched data
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Show loading indicator
  }

  if (error) {
    return <Text>Error: {error.message}</Text>; // Display error message
  }

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <View style={{ marginTop: 20 }}>
          {data.map((puja, index) => (
            <Pandal key={index} puja={puja} />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default PujaPageList;
