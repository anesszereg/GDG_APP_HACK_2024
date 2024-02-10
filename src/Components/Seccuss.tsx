import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Seccuss = (props: Props) => {
  return (

      <View style={styles.content}>
        {/* <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            height: "10%",
          }}
        > */}
          <Image
            source={require("../assets/images/successImag.png")}
            style={{ width: 170, height: 170, borderRadius: 20 }}
          />
        {/* </View> */}

        <Text style={{ color: "#06f", fontSize: 28 }}>Congratulation 🥳</Text>
        <Text style={{ color: "#616161", fontSize: 14 }}>
          your account is ready to use
        </Text>

    </View>
  );
};

export default Seccuss;

const styles = StyleSheet.create({
 
  content: {
    width: 380,
    height: 380,
    display:'flex',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
});
