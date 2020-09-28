import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";

export default function MenuItem({ item, handleOrder }) {
  const { name, prepTime } = item;
  return (
    <View>
      <TouchableHighlight onPress={() => handleOrder(item)}>
        <Text>{`${name}: ${prepTime} seconds`}</Text>
      </TouchableHighlight>
    </View>
  );
}
