import React from 'react'
import CallToAction from '../components/CallToAction'

export default function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center mx-auto p-3'>
      <div className='flex-1 flex justify-center items-center h-96 w-96 border border-gray-700 mb-2'>
        <h1 className='text-xl font-bold text-blue-950 dark:text-blue-300 '>Posting Cringe...</h1>
      </div>
      <div className="flex-1">
        <CallToAction />
      </div>      
    </div>
  )
}
