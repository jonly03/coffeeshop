import React from "react";
import { StyleSheet, View } from "react-native";

import CounterItem from "./CounterItem";

export default function CounterList({ counter }) {
  return (
    <View>
      {counter.map((item, idx) => (
        <CounterItem key={idx} item={item} />
      ))}
    </View>
  );
}
