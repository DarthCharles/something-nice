import React, { SFC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SomethingNiceinput: SFC<{
  item: { value: string; key: string };
  onPress: (somethingNiceId: string) => void;
}> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.key)}>
      <View style={styles.listItem}>
        <Text>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SomethingNiceinput;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1
  }
});
