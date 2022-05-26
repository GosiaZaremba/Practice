import { StyleSheet, View, Button, TextInput } from "react-native";
import { useState } from "react";

export const GoalInput = ({ addGoal }) => {
  const [enterGoalText, setEnterGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnterGoalText(enteredText);
  };

  const addGoalHandler = () => {
    addGoal(enterGoalText);
    setEnterGoalText("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enterGoalText}
      />
      <Button color={"#74A667"} title="Add goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#74A667",
    width: "70%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "#E1F0E6",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#74A667",
  },
});
