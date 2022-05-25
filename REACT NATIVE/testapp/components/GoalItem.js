import { StyleSheet, View, Text } from "react-native";

export const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#74A667",
    borderRadius: 6,
  },
  goalText: {
    fontSize: 16,
    textAlign: "center",
  },
});
