import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Text style={{
      left: 51,
      top: 194,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Testing  </Text><View style={{
      left: 39,
      top: 65,
      position: "absolute",
      width: 80,
      height: 80,
      backgroundColor: "#E4E4E4",
      borderRadius: "50%"
    }}></View></View>;
};

export default Untitled1;