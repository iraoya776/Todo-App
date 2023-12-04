import { View, view } from "react-native";
import { TodoList } from "./screens/TodoList";
import { Position1 } from "./screens/Position";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <TodoList /> */}
      <Position1 />
    </View>
  );
}
