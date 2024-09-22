import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ addTodo, reset }) => {
  Header.propTypes = {
    addTodo: PropTypes.func,
    reset: PropTypes.func,
  };

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <>
      <div className="container mx-48 my-auto">
        <form onSubmit={handleSubmit} className="flex flex-row items-center">
          {/* Input field for adding a new task */}
          <input
            className="w-52 sm:w-44 ml-3 mr-1 my-2 px-2 border rounded-sm border-slate-500 text-sm"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a task here"
          />
          <button
            className="py-1 px-3 w-12 h-6 my-2 bg-sky-600 text-white font-semibold rounded-full shadow-md hover:bg-sky-700 focus:outline-none focus:ring mx-1 text-xs"
            type="submit"
          >
            Add
          </button>
          <button
            className="py-1 px-2 w-12 h-6 my-2 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring text-xs"
            onClick={reset}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;
