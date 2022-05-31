import { TextInput, View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { StyleSheet } from "react-native";

export const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#916473",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#F7E3AF",
    borderBottomWidth: 2,
    color: "#F7E3AF",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
