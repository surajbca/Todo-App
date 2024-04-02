import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Enter text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            class="form-control"
            placeholder="entertext"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
