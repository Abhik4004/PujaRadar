import { useEffect, useState } from "react";
import { View, Button, ScrollView } from "react-native";
import { SafeAreaView, Text } from "react-native";
import pujaData from "../Data";
import Pandal from "./Pandal";

function PujaPageList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/67014d74ad19ca34f8b33c84 ",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setData(jsonData.record.pujaEvents);
        console.log(typeof jsonData.record[`pujaEvents`]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, []);
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <View style={{ marginTop: 20 }}>
          {pujaData.map((puja, index) => (
            <Pandal key={index} puja={puja} />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default PujaPageList;
