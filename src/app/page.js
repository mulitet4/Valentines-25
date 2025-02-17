"use client";
import { useToast } from "@/hooks/use-toast";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { isMobile, isBrowser } from "react-device-detect";

const messages = [];

const Valentines = () => {
  const [clickCount, setClickCount] = useState(0);
  const toast = useToast();
  const router = useRouter();
  return (
    <div className="h-svh bg-pink-200 overflow-clip">
      <div className="h-full max-w-4xl m-auto flex flex-col items-center justify-center">
        <div className="flex-col items-center justify-center text-center">
          <div className="bg-pink-500 rounded-xl text-white mt-24 mx-12">
            <h1 className="text-3xl font-bold p-3 ">
              Will you be my valentine
            </h1>
          </div>
          <div className="flex flex-row justify-center space-x-4 mt-12">
            <div className="bg-green-700 rounded-md">
              <button
                onClick={() => {
                  router.push("/yes");
                }}
                style={{
                  height: `${parseInt(
                    3 * (1 + clickCount * (isMobile ? 1 : 2))
                  )}rem`,
                  width: `${parseInt(
                    5 * (1 + clickCount * (isMobile ? 1 : 2))
                  )}rem`,
                }}
                className={` border-black hover:-translate-y-2 bg-green-600 text-white ${
                  clickCount > 1 ? "text-6xl" : "text-xl"
                } transition-all active:translate-y-0 rounded-md
              `}
              >
                YES
              </button>
            </div>
            <div className="bg-red-700 rounded-md h-12 w-20">
              <button
                onClick={() => {
                  setClickCount((prev) => prev + 1);
                  toast.toast({
                    title: messages[clickCount % messages.length],
                  });
                  console.log(
                    `${parseInt(3 * (1 + clickCount * (isMobile ? 1 : 2)))}rem`
                  );
                }}
                className="h-12 w-20 border-black hover:-translate-y-2 bg-red-600 text-white text-xl transition-all active:translate-y-0 rounded-md
              "
              >
                NO
              </button>
            </div>
          </div>
        </div>
        <div className="size-64 md:size-96 m-auto ">
          <img
            src={"/bugcat.gif"}
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
