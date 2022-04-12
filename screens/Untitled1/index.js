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
      left: 29,
      top: 87,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 41,
      fontSize: 15,
      borderRadius: 0,
      transform: "rotate(90deg)",
      letterSpacing: 21,
      textAlign: "center"
    }}>Lorem ipsum… </Text></View>;
};

export default Untitled1;