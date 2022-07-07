import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

export default function OrderList() {
  return (
    <View style={styles.container}>
      <View style={styles.mainCover}>
        <Text style={styles.subText}>Hey</Text>
        <Text style={styles.mainText}>Rider</Text>
        <Text style={styles.mainTextSub}>
          You have to collect the following products from the booth
        </Text>
      </View>
      <View style={styles.coverImage}>
        <Image
          style={styles.mainImage}
          source={require("../assets/pro.jpg")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.mainCover}>
        <TouchableHighlight
          onPress={() => Alert.alert("Simple Button pressed")}
          style={styles.buttonItem}
        >
          <Text style={styles.btnText}>REFRESH</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7FA",
  },
  mainCover: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
  },
  subText: {
    fontSize: 20,
    marginBottom: 6,
    color: "#2A8C00",
  },
  mainText: {
    color: "#2A8C00",
    fontSize: 40,
    marginBottom: 24,
  },
  mainTextSub: {
    fontSize: 20,
  },
  coverImage: {
    flex: 1,
  },
  mainImage: {
    flex: 1,
    width: "100%",
  },
  buttonItem: {
    height: 40,
    borderRadius: 2,
    fontSize: 11,
    backgroundColor: "#2A8C00",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  btnText: {
    height: 40,
    width: "100%",
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
});
