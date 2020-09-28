import React from "react";
import { StyleSheet, View, Text } from "react-native";

import QueueItem from "./QueueItem";

export default function QueueList({ queue }) {
  return (
    <View>
      <Text>Orders in the queue</Text>
      {queue.map((item, idx) => (
        <QueueItem key={idx} item={item} />
      ))}
    </View>
  );
}
