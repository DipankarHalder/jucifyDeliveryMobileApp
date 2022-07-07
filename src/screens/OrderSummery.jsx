import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function OrderSummery() {
  return (
    <View style={styles.container}>
      <Text>Order Summery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FA",
  },
});
