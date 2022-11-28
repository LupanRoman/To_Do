import React, { useContext, useState } from 'react';
import { GiExitDoor } from 'react-icons/gi';
import StateContext from '../context/StateContext';
import AddDrawer from './AddDrawer';
import Drawer from './Drawer';

const SideBar = () => {
  const { DrawersArr } = useContext(StateContext);
  const [drawerModal, setDrawerModal] = useState(false);
  return (
    <>
      <div className=" sidebar hidden md:flex flex-col bg-bg-color row-start-1 row-end-7">
        <h4 className="h-20 flex items-center p-10 text-xl font-bold">To Do</h4>
        <div className="flex h-full flex-col justify-between">
          <div>
            {DrawersArr?.map((item) => (
              <Drawer key={item.id} item={item} />
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center">
            <button
              onClick={() => setDrawerModal(true)}
              className="h-7 w-32 bg-btn-add rounded-lg cursor-pointer text-sm"
            >
              Add drawer
            </button>
            <input id="theme" type="checkbox" className="input" />
            <button className="text-xl h-7 w-10 bg-btn-add flex items-center justify-center rounded-lg mb-5 cursor-pointer">
              <GiExitDoor />
            </button>
            {drawerModal && <AddDrawer closeDrawer={setDrawerModal} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
