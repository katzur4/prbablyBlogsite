import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div>
        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center" >
            <div className='flex-1 justify-center flex flex-col'>
                <h2 className='text-2xl '>
                    You look lonely
                </h2>
                <p className='text-gray-500 my-2'>
                    I can fix that
                </p>
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none rounded-tr-none rounded-br-xl'>
                    <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noopener noreferrer'>
                        Click This
                    </a>
                </Button>
            </div>
            <div className="flex-1 p-7">
                <img src='https://pbs.twimg.com/media/GFmTiezXkAAS0LA?format=jpg&name=medium' 
                alt='I can fix that'
                />
            </div>
        </div>
    </div>
  )
}
