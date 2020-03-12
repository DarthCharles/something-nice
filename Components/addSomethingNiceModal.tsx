import React, { useState, FC } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";
import emojis from "../utils";

interface Props {
  addSomethingNice: (somethingNice: string) => void;
  shouldShowModal: boolean;
  onCancel: () => void;
}

const SomethingNiceinput: FC<Props> = ({
  addSomethingNice,
  shouldShowModal,
  onCancel
}) => {
  const [somethingNice, setSomethingNice] = useState("");

  const somethingNiceInputHandler = (somethingNice: string): void => {
    setSomethingNice(somethingNice);
  };

  const addSomethingNiceHandler = () => {
    const randEmoji: string = emojis[(Math.random() * emojis.length) | 0];
    addSomethingNice(`${somethingNice} ${randEmoji}`);
    setSomethingNice("");
  };

  return (
    <Modal visible={shouldShowModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="type something nice"
          style={styles.input}
          onChangeText={somethingNiceInputHandler}
          value={somethingNice}
        />
        <View style={styles.actionButtons}>
          <View style={styles.buttons}>
            <Button title="CANCEL" color="red" onPress={onCancel} />
          </View>
          <View style={styles.buttons}>
            <Button title="ADD" onPress={addSomethingNiceHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SomethingNiceinput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eceff1"
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%"
  },
  buttons: {
    width: "40%"
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: "80%",
    color: "black"
  }
});
