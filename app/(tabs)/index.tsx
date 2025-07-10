import React, { useState } from "react";
import {
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Header from "@/components/ui/Header";
import ListToDo from "@/components/ui/ListToDo";
import Input from "@/components/ui/Input";

interface ITodo {
  id: string | number;
  text: string;
  status: string;
}

export default function HomeScreen() {
  const [todo, setTodo] = useState('')
  const [status, setStatus] = useState('Chưa làm')
  const [show, setShow] = useState(false)
  const [todoList, setTodoList] = useState<ITodo[]>([])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* Header */}
      <View className=" bg-white flex-1">
        <Header />

        {/* Input */}
        <Input
          todo={todo}
          setTodo={setTodo}
          taskStatus={status}
          setTaskStatus={setStatus}
          show={show}
          setShow={setShow}
          todoList={todoList}
          setTodoList={setTodoList}
        />

        {/* List */}
        <ListToDo todoList={todoList} setTodoList={setTodoList} />
      </View>
    </TouchableWithoutFeedback>
  );
}
