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
      <div className="flex flex-col h-screen justify-between mt-10 mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        <div className="flex justify-center items-center">
          <div className="w-full bg-green-800 p-5 rounded-lg">
            <h1 className="text-center my-3 text-white font-mono text-lg font-semibold">
              Todo App
            </h1>
            <h3 className="text-center my-3 text-white font-mono text-xs">
              You have
              <span className="text-yellow-500 font-bold mx-2 my-auto">
                {todos.length}
              </span>
              task(s) to do and{" "}
              <span className="text-yellow-500 font-bold mx-2 my-auto">
                {completedTasks.length}
              </span>
              task(s) completed.
            </h3>
            <div className="flex justify-center items-center">
              <Header addTodo={addTodo} reset={reset} />
            </div>
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
      </div>
      <Footer />
    </>
  );
}

export default App;
