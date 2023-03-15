import React, { useEffect } from "react";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
function Success() {
  const router = useRouter();
  const { data: session } = useSession()
  
  useEffect(() => {

    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Nav />
      {
        session?<div className="flex items-center justify-center w-full space-x-3 mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-14 h-14 text-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1 className="text-xl">Success! You will be redirected to main page in 3s</h1>
      </div>:<p></p>
      }
      
    </>
  );
}

export default Success;
