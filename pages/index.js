import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useRouter } from 'next/router';

const index = () => {
  const route = useRouter();

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      route.push('/drawer/Landing');
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <>
      <div className="h-screen">
        <header className="w-full h-14 bg-bg-color absolute flex justify-center items-center">
          <h5 className="text-xl font-black ">To Do List</h5>
        </header>
        <div className="flex flex-col h-full w-full justify-around">
          <ul className="justify-center mt-20 items-center flex flex-col text-center text-xl font-bold">
            <li className="flex h-14 items-center ">Organize your tasks</li>
            <li className="flex h-14 items-center ">
              Get things done without distractions
            </li>
          </ul>
          <div className="w-full flex justify-center ">
            <button
              onClick={GoogleLogin}
              className="bg-bg-color flex p-6 items-center gap-4 rounded-xl cursor-pointer font-bold"
            >
              <FcGoogle className="text-xl" /> Sign Up/Log In with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
