import { 
  ImageBackground, 
  StyleSheet, 
  View 
} from 'react-native';

export default function Splash() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("../assets/splash.jpg")} 
        resizeMode="cover" 
        style={styles.image} 
      />
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
});