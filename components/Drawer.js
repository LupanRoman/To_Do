import Link from 'next/link';
import React, {useContext} from 'react';
import StateContext from '../context/StateContext';

const Drawer = ({ item: { title, id } }) => {
  const getId = () => {
    console.log(id)
  }
  
  return (
    <>
    <Link href={`/drawer/${id}`}>
      <div>
        <button onClick={getId}>{title}</button>
      </div>
    </Link>
    </>
  );
};

export default Drawer;
