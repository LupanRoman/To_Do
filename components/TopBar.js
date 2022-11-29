import React, { useState, useEffect } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import AddTask from './AddTask';
// import StateContext from '../../context/StateContext';
// import { useContext } from 'react';

const TopBar = () => {
  const [taskModal, setTaskModal] = useState(false);

  return (
    <>
      <div className=" md:hidden col-start-1 col-end-5 mt-9 ">
        <nav className="flex justify-between ">
          <div className="flex bg-nav-color w-72 h-10 items-center rounded-r-xl">
            <h5 className="font-bold ml-6 ">Name of the board</h5>
            <button className="text-2xl ml-9">
              <IoIosArrowDown />
            </button>
          </div>
          <div>
            <button className="h-9 w-9 bg-btn-add flex items-center justify-center rounded-full ml-4">
              <BsPlusLg />
            </button>
          </div>
        </nav>
      </div>
      <div className="hidden md:flex row-start-1 row-end-1 bg-bg-color col-start-2 col-end-6 h-20 items-center p-10 justify-between">
        <div>
          <h4 className="text-xl font-semibold">Name of the board</h4>
        </div>
        <div>
          <button
            onClick={() => setTaskModal(true)}
            className="h-12 w-40 bg-btn-add rounded-xl cursor-pointer font-semibold"
          >
            Add Task
          </button>
        </div>
        {taskModal && <AddTask closeTask={setTaskModal} />}
      </div>
    </>
  );
};

export default TopBar;
