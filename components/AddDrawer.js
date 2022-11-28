import React, { useContext } from 'react';
import { GrClose } from 'react-icons/gr';
import StateContext from '../context/StateContext';

const AddDrawer = ({ closeDrawer }) => {
  const { getData } = useContext(StateContext);

  return (
    <>
      <div className="flex flex-col gap-2 bg-btn-add absolute top-72 justify-between">
        <div className="w-full flex justify-end pr-4 pt-4">
          <button onClick={() => closeDrawer(false)}>
            <GrClose />
          </button>
        </div>
        <h4>Add new drawer</h4>
        <label htmlFor="drawer">Title</label>
        <input
          type="text"
          id="drawer"
          name="title"
          placeholder="Enter title here"
        />
        <button onClick={getData}>Add</button>
      </div>
    </>
  );
};

export default AddDrawer;
