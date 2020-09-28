import React from "react";
import { StyleSheet, View, Text } from "react-native";

import CounterItem from "./CounterItem";

export default function CounterList({ counter }) {
  return (
    <View>
      <Text>Orders on the counter</Text>
      {counter.map((item, idx) => (
        <CounterItem key={idx} item={item} />
      ))}
    </View>
  );
}
