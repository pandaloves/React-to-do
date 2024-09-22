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
    <div className="container mx-auto my-4 mb-1 max-w-sm">
      <div className="flex items-center gap-2">
        {/* Checkbox for completed task */}
        <input
          className="w-4 h-4 rounded-full border-slate-500"
          type="checkbox"
          onClick={() => handleCompletedTasks(todo.id)}
        />

        {isEditing ? (
          <>
            <input
              className="w-48 h-6 px-2 border rounded-sm border-slate-500 text-xs"
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <button
              className="py-1 px-2 w-12 h-6 bg-sky-600 text-white font-semibold rounded-full shadow-md hover:bg-sky-700 focus:outline-none focus:ring text-xs"
              onClick={handleUpdate}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <input
              className="w-48 h-6 px-2 border rounded-sm border-slate-500 text-xs"
              type="text"
              value={newText}
              readOnly
            />
            {/* Edit Button */}
            <button
              className="py-1 px-2 w-12 h-6 bg-sky-600 text-white font-semibold rounded-full shadow-md hover:bg-sky-700 focus:outline-none focus:ring text-xs"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </>
        )}
        {/* Delete Button */}
        <button
          className="py-1 px-2 w-14 h-6 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring text-xs"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
