import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import SomethingNiceListItem from "./Components/somethingNiceListItem";
import AddSomethingNiceModal from "./Components/addSomethingNiceModal";

export default function App() {
  const [everythingNice, setEverythingNice] = useState([]);
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const addSomethingNiceHandler = (somethingNice: string): void => {
    setEverythingNice(currentEverythingNice => [
      ...currentEverythingNice,
      { key: Math.random().toString(), value: somethingNice }
    ]);
    setShouldShowModal(false);
  };

  const deleteSomethingNiceHandler = (somethingNiceId: string): void => {
    setEverythingNice(currentEverythingNice =>
      currentEverythingNice.filter(s => s.key !== somethingNiceId)
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <Button
          title="Add something nice 😄"
          onPress={() => setShouldShowModal(true)}
        />
        <AddSomethingNiceModal
          addSomethingNice={addSomethingNiceHandler}
          shouldShowModal={shouldShowModal}
          onCancel={() => setShouldShowModal(false)}
        />
      </View>
      <FlatList
        data={everythingNice}
        renderItem={itemData => (
          <SomethingNiceListItem
            item={itemData.item}
            onPress={deleteSomethingNiceHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 50,
    backgroundColor: "#eceff1"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
