'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme == 'dark' ? (
        <button
          className='hover:bg-white hover:text-black transition-all'
          onClick={() => {
            setTheme('light');
          }}
        >
          Light
        </button>
      ) : (
        <button
          className='hover:bg-black hover:text-white transition-all'
          onClick={() => {
            setTheme('dark');
          }}
        >
          Dark
        </button>
      )}
    </>
  );
};

export default DarkModeButton;
