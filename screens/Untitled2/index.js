import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 29,
      top: 276,
      position: "absolute",
      height: 76,
      width: 168,
      backgroundColor: "#da2020",
      borderRadius: 0,
      color: "#777777",
      transform: "rotate(360deg)",
      borderWidth: 38
    }}></View><View style={{
      left: 84,
      top: 52,
      position: "absolute",
      width: 0,
      height: 0,
      backgroundColor: "#E4E4E4",
      borderRadius: 72,
      transform: "rotate(70deg)",
      borderWidth: 0
    }}></View><Text style={{
      left: 61,
      top: 167,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>testing</Text></View>;
};

export default Untitled2;