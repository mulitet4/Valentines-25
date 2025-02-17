"use client";
import { useToast } from "@/hooks/use-toast";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Valentines = () => {
  const [clickCount, setClickCount] = useState(0);
  const toast = useToast();

  return (
    <div className="h-svh bg-pink-200 overflow-clip">
      <div className="h-full max-w-4xl m-auto flex flex-col items-center justify-center">
        <div className="flex-col items-center justify-center text-center">
          <div className="bg-pink-500 rounded-xl text-white mt-24 mx-12">
            <h1 className="text-3xl font-bold p-3 ">YAY I KNEW IT!!!</h1>
          </div>
          <p className="text-2xl text-gray-600 font-bold">
            This is you to me ong fr fr 💖💖💖
          </p>
        </div>
        <div className="size-72 md:size-96 m-auto ">
          <img
            src={"/beating.gif"}
            width="546"
            height="415"
            alt="a blue cat holding a pink flower in its hand"
          />
        </div>
      </div>
    </div>
  );
};

export default Valentines;
