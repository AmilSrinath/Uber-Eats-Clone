import {StyleSheet, Text} from 'react-native';


export default function HomeScreen() {
  return (
      <Text style={styles.Text}>Index</Text>
  );
}


const styles = StyleSheet.create({
  Text : {
    marginHorizontal:'auto',
    marginVertical: 'auto',
    fontSize: 30,
  }
})
