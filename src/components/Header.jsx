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
      <div className="container mx-auto my-4 mb-1 min-w-64 max-w-sm">
        <form onSubmit={handleSubmit}>
          <input
            className="w-56 ml-3 mr-1 my-2 px-2 box-sizing border rounded-sm border-slate-500 text-sm"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a task here"
          />
          <button
            className="py-1 px-3 mr-1 my-2 w-16 h-6 bg-sky-600 text-white font-semibold rounded-full shadow-md hover:bg-sky-700 focus:outline-none focus:ring focus:bg-sky-400 focus:ring-opacity-75 mx-3 text-xs"
            type="submit"
          >
            Add
          </button>

          <button
            className="py-1 px-2 mr-1 my-2 w-16 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 m-1 text-xs"
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
