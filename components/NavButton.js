import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NavButton({ style, text, handlePress }) {
  return (
    <TouchableOpacity onPress={() => handlePress(text)}>
      <Text style={{ ...style }}>{text}</Text>
    </TouchableOpacity>
  );
}
