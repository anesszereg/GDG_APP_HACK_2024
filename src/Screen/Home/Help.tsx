import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/Ionicons"; 

type Props = {};

const Help = (props: Props) => {
  const countries = [
    "web development",
    "mobile development",
    "design",
    "marketing",
    "business",
  ];

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {" "}
          Ask for
          <Text style={{ color: "#06f" }}> help 🙋🏻</Text>we will be here for you{" "}
        </Text>
        <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
        }}>

        <Image source={require('../../assets/images/help.png')} style={{height:300 , width:350}}/>
        </View>
      </View>

      <Text
        style={{
          marginTop: 40,
          fontSize: 14,
          fontWeight: "bold",
          color: "#616161",
        }}
      >
        which type of mentor you need ?
      </Text>

      <SelectDropdown
        data={countries}
        buttonStyle={styles.buttonStyle}
        defaultButtonText="Select a mentor"
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
            setSelectedValue(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => {
          console.log("button pressed");
        }}
        >
        <Text style={{ fontWeight: "bold" ,color:"#06f" }}>get your {selectedValue+' mentor'}</Text>
        </TouchableOpacity>

      {/* <View
        style={[
          styles.attendance,
          { borderLeftWidth: 8, borderLeftColor: "#30BEB6" },
        ]}
      >

            <Text style={{ fontWeight: "bold" }}>
            your mentor are coming for you in 5 min    
                
            </Text> 


      </View> */}
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#fff",
},
title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
},
goBackButton: {
    height: 48,
    width: 48,
    backgroundColor: "#eee",
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
},
buttonStyle: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  attendance: {
    marginTop: 110,
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
  doneButton:{
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    borderColor: "#06f",
    borderWidth:2,

  }
});
