import React from "react";
import {signIn,signOut,useSession} from 'next-auth/react'
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
function Nav() {
  const { data: session } = useSession()
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <nav className="flex shadow-md bg-black text-white items-center justify-between">
      <div className="logo grid lg:grid-cols-2 text-center p-2">
        <div className="flex bg-white space-x-1 ml-3 cursor-pointer border border-white p-1 px-2 rounded-2xl" onClick={()=>{router.push('/')}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9 m-auto text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <div className="hidden lg:block">
          <p className="font-semibold text-black">E-COMMERCE</p>
          <p className="font-semibold text-black">APP</p>
        </div>
        </div>
      </div>
     
      <div className="flex space-x-10 mx-5 text-center items-center">
        <div className=' font-semibold' onClick={()=>{!session? signIn():''}}>
          {session? <div><p>Hello {session.user.name}</p>
          <p>Nice to see you</p></div> : <p className="cursor-pointer">SIGN IN</p>}

        </div>
        <div className='cursor-pointer font-semibold'>
        {session? <div onClick={()=>{signOut()}}>          <p>SIGN OUT</p></div> : <p></p>}

        </div>
        <Link href='/basket'>
        <div className="relative cursor-pointer font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 m-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <div className="absolute top-4 -right-3 bg-lightRed animate-pulse w-6 h-6  rounded-full text-center flex items-center justify-center">    <span >{items?.length}</span></div>

        </div>
        </Link>


      </div>
    </nav>
  );
}

export default Nav;
