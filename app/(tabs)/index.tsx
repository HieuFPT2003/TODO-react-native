import React, { useState } from "react";
import {
  FlatList,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Menu } from "react-native-paper";

interface ITodo {
  id: number;
  text: string;
  status: String;
}

export default function HomeScreen() {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("Chưa làm");
  const [menuVisible, setMenuVisible] = useState(false);
  const statuses = ["Chưa làm", "Đang làm", "Đã hoàn thành"];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* Header */}
      <View>
        <View className="bg-orange-600 mt-20">
          <Text className="text-4xl text-center font-bold">ToDo</Text>
        </View>

        {/* Input */}
        <View className="p-3 flex flex-row">
          {/* Nhập Nội Dung Công Việc */}
          <TextInput
            className="border-b-2 border-green-500 w-3/4 p-2"
            onChangeText={(text) => setTodo(text)}
            value={todo}
            placeholder="Nhập nội dung công việc"
          />
          {/* Chọn Trạng Thái */}
          <Pressable className="w-1/4">
            <Menu
              visible={menuVisible}
              onDismiss={() => setMenuVisible(false)}
              anchor={
                <Pressable onPress={() => setMenuVisible(true)}>
                  <Text className="border-1 ml-5 p-2">{status}</Text>
                </Pressable>
              }
            >
              {statuses.map((e, index) => (
                <Menu.Item
                  key={index}
                  onPress={() => {
                    setStatus(e);
                    setMenuVisible(false);
                  }}
                  title={e}
                />
              ))}
            </Menu>
          </Pressable>
        </View>
        <Pressable className={show ? "" : "hidden"}>
          <Text className="text-red-700"> Vui lòng nhập công việc cần làm</Text>
        </Pressable>

        <Pressable
          className="bg-green-600 rounded-md p-2 m-3 items-center"
          onPress={() => {
            setShow(false);
            if (!todo.trim()) {
              setShow(true);
              return;
            }
            setTodoList([
              ...todoList,
              { id: todoList.length + 1, text: todo, status },
            ]);
            setTodo("");
            setStatus("Chưa làm");
          }}
        >
          <Text className="font-bold">+Add</Text>
        </Pressable>

        {/* List */}
        <View>
          <FlatList
            data={todoList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="flex flex-row items-center p-3 border-b border-gray-300">
                <Text className="text-lg basis-4/12">{item.text}</Text>
                <Text className="text-lg basis-4/12">{item.status}</Text>
                <View className="basis-4/12 flex flex-row">
                  <Pressable 
                    className="bg-blue-600 rounded-md p-2 px-4"
                    onPress={() => {
                      
                      setTodoList(updatedTodoList);
                    }}
                  >
                    <Text className="text-white">Edit</Text>
                  </Pressable>

                  <Pressable
                    className="bg-red-600 rounded-md p-2"
                    onPress={() => {
                      setTodoList(
                        todoList.filter((todo) => todo.id !== item.id),
                      );
                    }}
                  >
                    <Text className="text-white">Delete</Text>
                  </Pressable>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
