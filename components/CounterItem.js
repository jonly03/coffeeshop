import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function CounterItem({ item }) {
  const { name, prepTime } = item;
  return (
    <View>
      <Text>{`${name} ordered ${prepTime} ago`}</Text>
    </View>
  );
}
