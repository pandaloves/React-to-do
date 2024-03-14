import { useState } from "react";
import PropTypes from "prop-types";

const TodoItem = ({
  todo,
  todos,
  setTodos,
  completedTasks,
  setCompletedTasks,
  updateTodo,
  deleteTodo,
}) => {
  TodoItem.propTypes = {
    todo: PropTypes.object,
    todos: PropTypes.array,
    setTodos: PropTypes.func,
    completedTasks: PropTypes.array,
    setCompletedTasks: PropTypes.func,
    updateTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
  };

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    if (!newText.trim()) return;
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  const handleCompletedTasks = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setCompletedTasks([...completedTasks, todo]);
  };
  return (
    <div>
      <div className="container mx-auto my-4 mb-1 min-w-64 max-w-sm">
        <input
          className="w-4 h-4 my-2 mr-1 rounded-full border-slate-500 "
          type="checkbox"
          onClick={() => handleCompletedTasks(todo.id)}
        />
        {isEditing ? (
          <>
            <input
              className="w-48 h-6 ml-1 mr-1 my-2 px-2 box-sizing border rounded-sm border-slate-500 text-xs"
              type="text"
              value={newText}
              onChange={(e) => {
                setNewText(e.target.value);
              }}
            />

            <button
              className="py-1 px-3 mr-1 w-12 h-6 my-2 bg-sky-600 text-white font-semibold rounded-full shadow-md hover:bg-sky-700 focus:outline-none focus:ring focus:bg-sky-400 focus:ring-opacity-75 mx-3 text-xs"
              onClick={handleUpdate}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <input
              className="w-48 h-6 ml-1 mr-1 my-2 px-2  box-sizing border rounded-sm border-slate-500 text-xs"
              type="text"
              value={newText}
              readOnly
              onChange={(e) => {
                setNewText(e.target.value);
              }}
            />
            <button
              className="py-1 px-3 mr-1 my-2 w-12 h-6 bg-sky-600 text-white font-semibold rounded-full shadow-md hover:bg-sky-700 focus:outline-none focus:ring focus:bg-sky-400 focus:ring-opacity-75 mx-3 text-xs"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </>
        )}

        <button
          className="py-1 px-3 my-2 mr-1 w-15 h-6 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 text-xs"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
