import {
    FlatList,
    Pressable,
    Text,
    View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Btn from "./Btn";

type Todo = {
    id: string | number;
    text: string;
    status: string;
};

type ListToDoProps = {
    todoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const ListToDo = ({ todoList, setTodoList }: ListToDoProps) => {
    return (
        <View>
            <FlatList
                data={todoList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View className="flex flex-row items-center p-3 border-b border-gray-300">
                        <Text className="text-lg basis-4/12">{item.text}</Text>
                        <Text className="text-lg basis-2/12">{item.status}</Text>
                        <View className="basis-6/12 flex flex-row">
                            <Pressable
                                className="bg-blue-600 rounded-md p-2 px-4 flex items-center justify-center mr-2 basis-1/2"
                            >
                                <AntDesign name="edit" size={24} color="white" />
                                <Btn title="Edit" style={{ marginLeft: 5 }} onPress={() => {
                                    const updatedTodoList = todoList.map((todo) => {
                                        if (todo.id === item.id) {
                                            return { ...todo, text: todo.text, status: item.status };
                                        }
                                        return todo;
                                    });
                                    setTodoList(updatedTodoList);
                                }} />
                            </Pressable>
                            <Pressable
                                className="bg-red-600 rounded-md p-2 px-4 flex flex-row items-center justify-center basis-1/2"
                            >
                                <AntDesign name="delete" size={24} color="while" className="" />
                                <Btn title="Delete" style={{ marginLeft: 5 }} onPress={() => {
                                    setTodoList(
                                        todoList.filter((todo) => todo.id !== item.id),
                                    );
                                }} />
                            </Pressable>
                        </View>
                    </View>
                )}
            />
        </View>
    )

}

export default ListToDo;