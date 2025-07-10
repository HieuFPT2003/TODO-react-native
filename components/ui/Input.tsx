import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Menu } from 'react-native-paper'

type InputProps = {
  todo: string ;
  setTodo: (todo: string) => void;
  taskStatus: string;
  setTaskStatus: (status: string) => void;
  show: boolean;
  setShow: (b: boolean) => void;
  todoList: { id: string | number; text: string; status: string }[];
  setTodoList: React.Dispatch<React.SetStateAction<{ id: string | number ; text: string; status: string }[]>>;
};


export default function Input({
  todo,
  setTodo,
  taskStatus,
  setTaskStatus,
  show,
  setShow,
  todoList,
  setTodoList,
}: InputProps) {
  const [menuVisible, setMenuVisible] = useState(false);
  const statuses = ['Chưa làm', 'Đang làm', 'Hoàn thành'];

  return (
    <View>
      <View className="p-3 flex flex-row">
          {/* Nhập Nội Dung Công Việc */}
          <TextInput
            className="border-b-2 border-green-500 w-3/4 p-2"
            onChangeText={(text) => {
              setTodo(text);
              if (text.trim()) setShow(false);
            }}
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
                  <Text className="border-1 ml-5 p-2">{taskStatus}</Text>
                </Pressable>
              }
            >
              {statuses.map((e: string, index: number) => (
                <Menu.Item
                  key={index}
                  onPress={() => {
                    setTaskStatus(e);
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
             if (!todo.trim()) {
            setShow(true);
            return;
          }
          setTodoList([
            ...todoList,
            { id: (todoList.length + 1).toString(), text: todo, status: taskStatus },
          ]);
          setTodo("");
          setTaskStatus("Chưa làm");
          }}
        >
          <Text className="font-bold">+Add</Text>
        </Pressable>
    </View>
  )
}