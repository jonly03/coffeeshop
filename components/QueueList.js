import React from "react";
import { StyleSheet, View } from "react-native";

import QueueItem from "./QueueItem";

export default function QueueList({ queue }) {
  return (
    <View>
      {queue.map((item, idx) => (
        <QueueItem key={idx} item={item} />
      ))}
    </View>
  );
}
