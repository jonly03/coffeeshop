import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuItem from "./MenuItem";

export default function MenuList({ menu, handleOrder }) {
  return (
    <View>
      <Text>Menu</Text>
      <View>
        {/* If we had a longer menu, a FlatList would be better suited for this instead of an array map */}
        {menu.map((item, idx) => (
          <MenuItem key={idx} item={item} handleOrder={handleOrder} />
        ))}
      </View>
    </View>
  );
}
