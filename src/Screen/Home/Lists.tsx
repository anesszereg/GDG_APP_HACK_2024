import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {};

const Lists = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of my privois Tasks 🗓️</Text>

      <View style={styles.containerTask}>
        <View
          style={[
            styles.Task,
            {
              borderColor: "#A3D139",
              backgroundColor: "rgba(163, 209, 57, 0.05)",
            },
          ]}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
            }}
          >
            <View style={styles.iconContainer}>
              <Icon name="time-outline" size={24} color="#000" />
            </View>
            <Text style={styles.taskText}>Check in</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={styles.taskText}>12:00 pm</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#616161",
                }}
              >
                on time
              </Text>
            </View>
            <Icon name="checkmark-sharp" size={24} color="#000" />
          </View>
        </View>
        <View style={[
            styles.Task,
            {
              borderColor: "#FF7F74",
              backgroundColor: "rgba(255, 127, 116, 0.05)",
            },
          ]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
            }}
          >
            <View style={styles.iconContainer}>
              <Icon name="game-controller" size={24} color="#000" />
            </View>
            <Text style={styles.taskText}>fun activity</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={styles.taskText}>06:00 pm</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#616161",
                }}
              >
                not on time
              </Text>
            </View>
            <Icon name="close" size={24} color="#000" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Lists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingRight: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  containerTask: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
    marginTop: 20,
  },
  Task: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "center",

    padding: 20,
    borderRadius: 10,
    width: 185,
    height: 150,
    borderWidth: 1,
  },
  iconContainer: {
    height: 45,
    width: 45,
    backgroundColor: "rgba(48, 133, 254, 0.3)",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  taskText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});
