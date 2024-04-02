import React from "react";

const TodoList = ({ tasks, onDelete }) => {
  return (
    <div className="container">
      <table class="table">
        <tbody>
          <tr>
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  {task.text}
                  <div className="text-end">
                    <button
                      onClick={() => onDelete(task.id)}
                      className="btn btn-dark"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
