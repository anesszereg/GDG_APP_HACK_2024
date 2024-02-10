import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons"; // You can choose other icon libraries as well
import FontIcon from "react-native-vector-icons/FontAwesome5"; // You can choose other icon libraries as well
import { setUser } from "../../redux/Slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "react-native-paper";
import Swipeable from "react-native-swipeable";
import createApi from "../../Api/Api";

const Home = ({ navigation }) => {
  const [agenda, setAgenda] = useState([]);
  const dispatch = useDispatch();

  // const getUser = useSelector((state:any) => state.user.user);
  // console.log("user😍 ", getUser);

  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 3600000); // Update every hour

    return () => clearInterval(interval);
  }, []);


  // useEffect(() => {

  //   const getAgenda = async () => {
  //     const api = await createApi();
  //     const response = await api.post("get-agenda/")
  //     const data = response.data;
  //     setAgenda(data);
  //     console.log('====================================');
  //   console.log({data});
  //     console.log('====================================');
  //   }
  //   getAgenda();
    
  // }, [])
  









  // Generating an array of 48 elements representing hours from 0 to 47
  const hoursArray = Array.from({ length: 48 }, (_, index) => index);

  // Render function for each hour item
  const renderHourItem = ({ item }) => (
    <View
      style={[styles.hours, item <= currentHour && styles.currentAndPastHour]}
    >
      <Text
        style={[styles.hourText, item <= currentHour && { color: "#FF7F74" }]}
      >
        {String(item).padStart(2, "0")}h
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* header */}

      <View style={styles.header}>
        <View style={styles.profile}>
          <Avatar.Image
            size={48}
            source={require("../../assets/images/avatar.png")}
          />
          <View>
            <Text style={styles.title}>
              {" "} Aness ZEREG
              {/* {getUser.first_name+ " " + getUser.last_name}{" "} */}
            </Text>
            <Text style={styles.blueText}> Full_stack developer</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notification}>
          <Icon name="notifications" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* all tasks */}

      <View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>All Leaves</Text>

          <TouchableOpacity
          // onPress={}
          >
            <FontIcon name="sliders-h" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.Task}>
          <View
            style={[
              styles.TaskContainer,
              {
                backgroundColor: "rgba(48, 133, 254, 0.05)",
                borderColor: "#3085FE",
              },
            ]}
          >
            <Text style={styles.title}>total Tasks</Text>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#3085FE" }}
            >
              {" "}
              20
            </Text>
          </View>
          <View
            style={[
              styles.TaskContainer,
              {
                backgroundColor: "rgba(163, 209, 57, 0.05)",
                borderColor: "#A3D139",
              },
            ]}
          >
            <Text style={styles.title}> Tasks Approved</Text>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#A3D139" }}
            >
              {" "}
              2
            </Text>
          </View>
          <View
            style={[
              styles.TaskContainer,
              {
                backgroundColor: "rgba(48, 190, 182, 0.05)",
                borderColor: "#30BEB6",
              },
            ]}
          >
            <Text style={styles.title}> Leave Pending</Text>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#30BEB6" }}
            >
              {" "}
              2
            </Text>
          </View>
          <View
            style={[
              styles.TaskContainer,
              {
                backgroundColor: "rgba(255, 127, 116, 0.05)",
                borderColor: "#FF7F74",
              },
            ]}
          >
            <Text style={styles.title}> Leave Cancelled</Text>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#FF7F74" }}
            >
              {" "}
              2
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        data={hoursArray}
        renderItem={renderHourItem}
        keyExtractor={(item) => String(item)}
        horizontal
      />

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 20,
        }}
      >
        <Text style={styles.title}> Today Attendance </Text>

        <View
          style={[
            styles.attendance,
            { borderLeftColor: "#FF7F74", borderLeftWidth: 8 },
          ]}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
            }}
          >
            <View style={styles.iconContainer}>
              <Icon name="time-outline" size={24} color="#3085FE" />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Text style={styles.title}>check in </Text>
              <Text style={styles.time}>12:00 pm</Text>
            </View>
          </View>
          <Text style={styles.time}> - 02:00 h</Text>
        </View>
        <View
          style={[
            styles.attendance,
            { borderLeftWidth: 8, borderLeftColor: "#30BEB6" },
          ]}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 16,
            }}
          >
            <View style={styles.iconContainer}>
              <Icon name="time-outline" size={24} color="#3085FE" />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Text style={styles.title}>check in </Text>
              <Text style={styles.time}>12:00 pm</Text>
            </View>
          </View>
          <Text style={styles.time}> - 04:00 h</Text>
        </View>

        {/* <Swipeable style={styles.attendance} leftContent={leftContent} rightButtons={rightButtons}>
       
    </Swipeable> */}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 52,
  },
  notification: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  blueText: {
    fontSize: 14,
    fontWeight: "300",
    color: "#000",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TaskContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 120,
    width: 185,
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
  },
  Task: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap",
  },
  hours: {
    height: 80,
    width: 80,
    backgroundColor: "rgba(48, 133, 254, 0.05)",
    borderWidth: 1,
    borderColor: "#3085FE",
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  hourText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3085FE",
  },
  currentAndPastHour: {
    backgroundColor: "rgba(255, 127, 116, 0.05)",
    borderColor: "#FF7F74",
  },
  attendance: {
    height: 80,
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,

    elevation: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: "rgba(48, 133, 254, 0.3)",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#616161",
  },
});
