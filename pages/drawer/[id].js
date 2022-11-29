import React, { useContext } from 'react';
import DashLayout from '../../components/layouts/DashLayout';
import StateContext from '../../context/StateContext';

const DrawerPage = () => {
  const { DrawerArr } = useContext(StateContext);
  
  DrawerArr.length >= 1 && DrawerArr.map((item) => (
    <>
      <div>
        <h5>{item.title}</h5>
      </div>
    </>
  ))
  // Here are displayed the Drawers contents in a dynamic way
  // return <div>DrawerPage</div>;
};

DrawerPage.Layout = DashLayout;

export default DrawerPage;
