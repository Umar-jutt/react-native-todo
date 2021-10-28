import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Addtodo from "./addtodo";
import Header from "./components/header";
import Todoitems from "./todoItem";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Buy Cofee",
      key: 1,
    },
    {
      text: "Create An App",
      key: 2,
    },
    {
      text: "play On The Switch",
      key: 3,
    },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Addtodo submitHandler={submitHandler} />
          <View style={styles.List}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Todoitems item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  List: {
    marginTop: 20,
  },
});
