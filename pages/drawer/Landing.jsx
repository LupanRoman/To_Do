import React from 'react';
import DashLayout from '../../components/layouts/DashLayout';

const Landing = () => {
  // This will render the default page where the sign up action will redirect the user
  return (
    <>
      <div>
        <h5 className='hidden md:flex'>Landing</h5>
      </div>
    </>
  );
};

Landing.Layout = DashLayout;

export default Landing;
