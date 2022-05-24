import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.words}>Oh crap.</Text>
      </View>
      <Text style={styles.words}>Hello World!</Text>
      <Button title="Pusz de baton" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  words: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "green",
  },
});
