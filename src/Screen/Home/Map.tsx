import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Map = (props: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/screenshoot.png')}
        style={styles.backgroundImage}
      >
        {/* Your other components/content */}
      </ImageBackground>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Other styles for your container if needed
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'contain', // or 'stretch' or 'contain' as per your preference
        // Other styles for your background image if needed
      },

});
