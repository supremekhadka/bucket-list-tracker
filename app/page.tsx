'use client'

import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
      // Access environment variables and log them
      console.log('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:', process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
      console.log('CLERK_SECRET_KEY:', process.env.CLERK_SECRET_KEY);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center h-[calc(100vh-5rem)] gap-10">
        <h1 className='text-5xl font-bold uppercase'>Bucket List Tracker</h1>
        <div className="flex flex-col items-center gap-2">
          <Link href='/sign-up' className='underline text-xl font-medium'>Sign Up to Get Started</Link>
          <span className='text-lg'>or</span>
          <Link href='/sign-in' className='underline text-xl font-medium'>Sign In</Link>
        </div>
      </div>
    </>
  )
}

export default HomePage