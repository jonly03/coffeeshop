import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NavButton({ text, handlePress }) {
  return (
    <TouchableOpacity onPress={() => handlePress(text)}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
