import React from 'react';
import { GrClose } from 'react-icons/gr';

const AddTask = ({ closeTask }) => {
  return (
    <>
      <div className="flex gap-3 absolute right-72 bg-btn-add p-5 rounded-xl">
        <h4>New task</h4>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="Enter your task here"
        />
        <button>Add</button>
        <button onClick={() => closeTask(false)}>
          <GrClose />
        </button>
      </div>
    </>
  );
};

export default AddTask;
