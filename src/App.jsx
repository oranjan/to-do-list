import { useState } from "react";

const App = () => {
  const [priorityValue, setPriorityValue] = useState(1);
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  console.log(task);

  const lowPriorityTasks = task?.filter((obj) => obj.value == 1);
  const midPriorityTasks = task?.filter((obj) => obj.value == 2);
  const highPriorityTasks = task?.filter((obj) => obj.value == 3);
  const handleDeleteClick = (key) => {
    const updatedTasks = task.filter((obj) => obj.name !== key);
    setTask(updatedTasks);
  };

  return (
    <section className="mx-5 mt-3">
      <h1>Priority To-Do List </h1>
      <div className="input-group ">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Add a new task"
        />
        <select
          className="form-select"
          value={priorityValue}
          onChange={(e) => setPriorityValue(e.target.value)}
        >
          <option value="1">Low Priority</option>
          <option value="2">Medium Priority</option>
          <option value="3">High Priority</option>
        </select>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() =>
            setTask((prev) => [...prev, { name: input, value: priorityValue }])
          }
        >
          Add
        </button>
      </div>

      <div className="container d-flex justify-content-between mt-4">
        <div>
          <h4>Low Priority </h4>
          {lowPriorityTasks.map((task) => {
            return (
              <div key={task.name} className="low-priority m-2">
                <div className="d-flex w-25 p-3  justify-content-between align-items-center">
                  <p>{task.name}</p>
                  <button
                    onClick={() => handleDeleteClick(task.name)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h4>Mid Priority </h4>
          {midPriorityTasks.map((task) => {
            return (
              <div key={task.name} className="low-priority m-2">
                <div className="d-flex w-25 p-3  justify-content-between align-items-center">
                  <p>{task.name}</p>
                  <button
                    onClick={() => handleDeleteClick(task.name)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h4>High Priority </h4>
          {highPriorityTasks.map((task) => {
            return (
              <div key={task.name} className="low-priority m-2">
                <div className="d-flex w-25 p-3  justify-content-between align-items-center">
                  <p>{task.name}</p>
                  <button
                    onClick={() => handleDeleteClick(task.name)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default App;
