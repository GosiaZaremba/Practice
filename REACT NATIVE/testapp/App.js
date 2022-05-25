import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { useState } from "react";
import { GoalItem } from "./components/GoalItem";

export default function App() {
  const [enterGoalText, setEnterGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnterGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enterGoalText, id: Math.random().toString() },
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
        <Button color={"#74A667"} title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#D1DED5",
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
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#74A667",
    width: "70%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "#E1F0E6",
  },
  goalsContainer: {
    flex: 5,
  },
});
