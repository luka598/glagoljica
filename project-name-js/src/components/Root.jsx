import React from 'react'
import { Outlet } from "react-router-dom";

import { useRecoilValue } from 'recoil';
import { charCountState } from '@/state/text';

function Root() {
  const count = useRecoilValue(charCountState);

  return (
    <div className="min-h-screen max-w-screen bg-background text-text">
      <p className=''>Char count from root: {count}</p>
      <Outlet />
    </div>
  )
}

export default Root
