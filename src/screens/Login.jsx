import React from "react";
import { 
  ImageBackground, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableHighlight
} from 'react-native';

export default function Login() {
  const [mailText, onChangeMailText] = React.useState("");
  const [passwordText, onChangePasswordText] = React.useState("");

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("../assets/login.jpg")} 
        resizeMode="cover" 
        style={styles.image} 
      >
        <View style={styles.logincenter}>
          <Text style={styles.maintext}>Login</Text>
          <View style={styles.inputSection}>
            <Text style={styles.labeltext}>Login ID / Gmail</Text>
            <TextInput
              style={styles.inputItem}
              value={mailText}
              onChangeText={onChangeMailText}
              autoCorrect={false}
            />
          </View>
          <View style={styles.inputSection}>
            <Text style={styles.labeltext}>Password</Text>
            <TextInput
              style={styles.inputItem}
              value={passwordText}
              secureTextEntry={true}
              onChangeText={onChangePasswordText}
              autoCorrect={false}
            />
          </View>
          <TouchableHighlight 
            onPress={() => Alert.alert('Simple Button pressed')} 
            style={styles.buttonItem}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  logincenter: {
    display: "flex",
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 40,
    justifyContent: "center",
    alignContent: "center",
  },
  maintext: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 40,
  },
  inputSection: {
    width: "100%",
    marginBottom: 40,
  },
  labeltext: {
    color: "#605F64",
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
  },
  inputItem: {
    height: 32,
    color: "#605F64",
    textAlign: "center",
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  buttonItem: {
    height: 40,
    borderRadius:2,
    fontSize: 11,
    backgroundColor : "#2A8C00",
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
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
  }
});

