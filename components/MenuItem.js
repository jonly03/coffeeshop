import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function MenuItem({ item, handleOrder }) {
  const { name, prepTime } = item;
  return (
    <View>
      <TouchableOpacity onPress={() => handleOrder(item)}>
        <Text>{`${name}: ${prepTime} seconds`}</Text>
      </TouchableOpacity>
    </View>
  );
}
