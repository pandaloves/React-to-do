import PropTypes from "prop-types";

const CompletedTask = ({ completedTask, deleteCompletedTask }) => {
  CompletedTask.propTypes = {
    completedTask: PropTypes.object,
    deleteCompletedTask: PropTypes.func,
  };

  return (
    <>
      <div key={completedTask.id}>
        <div className="container mx-auto my-4 mb-1 min-w-64 max-w-sm">
          <input
            className="w-48 h-6 mx-2  px-2 box-sizing border rounded-sm border-slate-500 text-xs"
            type="text"
            value={completedTask.text}
            readOnly
          />

          <button
            className="py-1 px-3  w-15 h-6 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 text-xs"
            onClick={() => deleteCompletedTask(completedTask.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CompletedTask;
