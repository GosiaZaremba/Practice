import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [enterGoalText, setEnterGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnterGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enterGoalText,
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button color={"#564882"} title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <Text style={styles.goalItem} key={goal}>
            {goal}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#537F96",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#564882",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#564882",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    fontSize: 16,
    backgroundColor: "#564882",
    borderRadius: 6,
    textAlign: "center",
  },
});
