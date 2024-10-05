import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";

const trendingEvents = {
  "2024-10-20": [{ id: "1", event: "Maha Ashtami Celebrations" }],
  "2024-10-21": [{ id: "2", event: "Vijaya Dashami Procession" }],
  // Add more events with their respective dates
};

function CalenderScreen() {
  const [selected, setSelected] = useState("");
  const [events, setEvents] = useState([]);

  const onDayPress = (day) => {
    setSelected(day.dateString);
    setEvents(trendingEvents[day.dateString] || []);
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#dd99ee",
        }}
        onDayPress={onDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />

      <View style={styles.trendingContainer}>
        <Text style={styles.trendingTitle}>Trending Events:</Text>
        {events.length > 0 ? (
          <FlatList
            data={events}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text style={styles.eventText}>{item.event}</Text>
            )}
          />
        ) : (
          <Text style={styles.noEventsText}>No events for this day.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendar: {
    borderWidth: 1,
    borderColor: "gray",
    height: 350,
    marginTop: 15,
  },
  trendingContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FFF3E0",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  trendingTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5D4037",
  },
  eventText: {
    fontSize: 16,
    color: "#2d4150",
  },
  noEventsText: {
    fontSize: 16,
    color: "#888",
  },
});

export default CalenderScreen;
