import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

export const GoalInput = ({ addGoal, visible, onCancel }) => {
  const [enterGoalText, setEnterGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnterGoalText(enteredText);
  };

  const addGoalHandler = () => {
    addGoal(enterGoalText);
    setEnterGoalText("");
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/pngwing.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enterGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color={"#F799E2"} title="Cancel" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              color={"#8BDDC4"}
              title="Add goal"
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#F5DA5B",
    width: "100%",
    padding: 8,
    backgroundColor: "#FBF9EE",
  },
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBFAE7",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
