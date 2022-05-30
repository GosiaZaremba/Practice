import { StyleSheet, View, Text, Pressable } from "react-native";

export const GoalItem = ({ text, deleteGoal, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#A66798" }}
        onPress={deleteGoal.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem} //for iOS
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#9C6EFF",
    borderRadius: 6,
  },
  goalText: {
    fontSize: 16,
    textAlign: "center",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
