import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const reset = () => {
    setTodos([]);
    setCompletedTasks([]);
  };

  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <div className="flex justify-center">
          <div className="columns-1 bg-green-800">
            <h1 className="text-center my-3 text-white font-mono text-lg font-semibold">
              Todo App
            </h1>
            <h3 className="text-center my-3 text-white font-mono text-xs">
              You have {todos.length} task(s) to do and {completedTasks.length}{" "}
              task(s) completed.
            </h3>
            <Header addTodo={addTodo} reset={reset} />

            <List
              todos={todos}
              setTodos={setTodos}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              completedTasks={completedTasks}
              setCompletedTasks={setCompletedTasks}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
