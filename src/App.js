import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./components/actions";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = (text) => {
    dispatch(addTask({ id: Date.now(), text }));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="App">
      <div>
        <h1 className="text-center">Todo App</h1>
        <AddTodo onAdd={handleAddTask} />
        <TodoList tasks={tasks} onDelete={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;
