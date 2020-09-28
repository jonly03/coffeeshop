import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function NavButton({ text, handlePress }) {
  return (
    <TouchableHighlight onPress={() => handlePress(text)}>
      <Text>{text}</Text>
    </TouchableHighlight>
  );
}
