import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const WalkScreen = ({ navigation }) => {
  const [step, setStep] = useState(0);

  const walkthroughData = [
    {
      id: 1,
      title: "Reduce the workload of HR  management",
      subTitle: "With our tracking system you can easily pass the event",
    },
    {
      id: 2,
      title: "Get live info",
      subTitle: "you can check your event agenda  at any time of the day",
    },
    {
      id: 3,
      title: "Join us now",
      subTitle: "Create your account to have access to your dashboard",
    },
  ];

  const handleNext = () => {
    if (step < walkthroughData.length - 1) {
      setStep(step + 1);
    } else {
      navigation.navigate("Login");
    }
  };

  const { title, subTitle } = walkthroughData[step];

  let justifyContentStyle = "flex-start";

  if (step === Math.floor(walkthroughData.length / 2)) {
    justifyContentStyle = "center";
  } else if (step === walkthroughData.length - 1) {
    justifyContentStyle = "flex-end";
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Skip</Text>
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          left: 60,
          top: 200,
        }}
      >
        {/* show images depend on the step  */}

        {step === 0 && (
          <Image
            width={315}
            height={641}
            source={require("../../assets/images/screen.png")}
          />
        )}
        {step === 1 && (
          <Image
            width={315}
            height={641}
            source={require("../../assets/images/screen2.png")}
          />
        )}
        {step === 2 && (
          <Image
            width={200}
            height={641}
            source={require("../../assets/images/screen3.png")}
          />
        )}
      </View>
      <View style={styles.down}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            paddingTop: 20,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            borderColor: "#c1c1c1",
            borderWidth: 1,
            backgroundColor: "#fff",
            height: "40%",
          }}
        >
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
          <View style={[styles.index, { justifyContent: justifyContentStyle }]}>
            <View style={styles.colorIndex}></View>
          </View>

          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.btnText}>
              {step < walkthroughData.length - 1 ? "Next" : "Login"}
            </Text>
          </TouchableOpacity>

          {step < walkthroughData.length - 1 ? null : (
            <View style={styles.cont}>
              <Text style={{ color: "#6A6A6A" }}>
                {" "}
                You don't have an account ?
              </Text>
              <TouchableOpacity>
                <Text style={{ color: "#0066FF" }}> Create one here </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  index: {
    display: "flex",
    flexDirection: "row",
    width: "30%",
    backgroundColor: "#D9E8FF",
    height: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  colorIndex: {
    width: 34,
    height: 10,
    borderRadius: 6,
    backgroundColor: "#0066FF",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    position: "relative",
  },
  skipButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    paddingRight: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "black",
    marginBottom: 8,
    textAlign: "center",
  },
  subTitle: {
    width: 240,
    fontSize: 16,
    fontWeight: "400",
    color: "black",
    marginBottom: 60,
    textAlign: "center",
  },
  down: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 16,
    color: "#06F",
    fontWeight: "500",
    textAlign: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -20,
  },
  nextButton: {
    // marginBottom: 20,
    padding: 13,
    backgroundColor: "#06f",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  cont: {
    display: "flex",
    justifyContent: "center",
    marginTop: 16,
    flexDirection: "row",
    width: "100%",
  },
});

export default WalkScreen;
