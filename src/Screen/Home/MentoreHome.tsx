import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {};

const MentoreHome = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Avatar.Image size={48} source={require("../../assets/images/avatar.png")} />
          <View>
            <Text style={styles.title}> Aness Zereg</Text>
            <Text style={styles.blueText}> Full_stack developer</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notification}>
          <Icon name="notifications" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#FF7F74",
            }}
          >
            Team 1 need help
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 28,
              width: 108,
              backgroundColor: "rgba(255, 127, 116, 0.1)",
              borderRadius: 100,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#FF7F74",
              }}
            >
              pendding
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop:10,
          }}
        >
          <Text
            style={{
              width: "60%",
              fontSize: 14,
              fontWeight: "300",
              color: "#000",
            }}
          >
            this team are working on the project of <Text
              style={{
 
            
                fontWeight: "bold",
              
              }}
            >
                 organization platform
                </Text>
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginTop: 10,
                fontSize: 14,
                fontWeight: "300",
                color: "#000",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Members:
              </Text>{" "}
              4
            </Text>
            <Text>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Time:
              </Text>{" "}
              3min ago 
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#30BEB6",
            }}
          >
            Team 2 need help
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 28,
              width: 108,
              backgroundColor: "rgba(48, 190, 182, 0.05)",
              borderRadius: 100,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#30BEB6",
              }}
            >
              approved
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              width: "60%",
              fontSize: 14,
              fontWeight: "300",
              color: "#000",
            }}
          >
            this team are working on the project of <Text
              style={{
 
            
                fontWeight: "bold",
              
              }}
            >
                faintech
            </Text>
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                marginTop: 20,
                fontSize: 14,
                fontWeight: "300",
                color: "#000",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Members:
              </Text>{" "}
              4
            </Text>
            <Text>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Time:
              </Text>{" "}
              3min ago 
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MentoreHome;

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
  content: {
    height: 150,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
  },
});
