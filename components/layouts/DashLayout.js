import React from 'react';
import SideBar from '../SideBar';
import TopBar from '../TopBar';

const DashLayout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <SideBar />
        <TopBar />
        <main className="dynamic">{children}</main>
      </div>
    </>
  );
};

export default DashLayout;
