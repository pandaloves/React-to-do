import TodoItem from "../components/TodoItem";
import CompletedTask from "./CompletedTask";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const List = ({
  todos,
  setTodos,
  updateTodo,
  deleteTodo,
  completedTasks,
  setCompletedTasks,
}) => {
  List.propTypes = {
    todos: PropTypes.array,
    setTodos: PropTypes.func,
    completedTasks: PropTypes.array,
    setCompletedTasks: PropTypes.func,
    updateTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
  };

  const deleteCompletedTask = (id) => {
    setCompletedTasks(completedTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col gap-y-2 bg-green-600">
      {todos.length > 0 && (
        <div className="p-2 overflow-y-auto relative shadow rounded-xl ml-1 min-w-64 max-w-sm">
          <h4 className="ml-2 text-white">Task(s) to do</h4>
          {todos &&
            todos.map((todo) => (
              <TodoItem
                key={uuidv4()}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                completedTasks={completedTasks}
                setCompletedTasks={setCompletedTasks}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            ))}
        </div>
      )}

      <div className="flex flex-col gap-y-2 bg-green-700">
        {completedTasks.length > 0 && (
          <div className="p-2 overflow-y-auto relative shadow rounded-xl ml-1 min-w-64 max-w-sm">
            <h4 className="text-white">Task(s) done</h4>
            {completedTasks &&
              completedTasks.map((completedTask) => (
                <CompletedTask
                  key={uuidv4()}
                  completedTask={completedTask}
                  deleteCompletedTask={deleteCompletedTask}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
