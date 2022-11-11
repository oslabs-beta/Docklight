import * as React from 'react'

export default function Container() {
  return (
    <div className='justify-self-center mt-[50px] border-4 border-blue-400 rounded-md min-h-[350px] min-w-[900px]'>
        <div className='grid grid-cols-3 gap-5 mt-2 ml-2 mb-8 font-semibold'>
          <h1>Container Name:</h1>
          <h1>Container ID:</h1>
          <button className='ml-auto mr-3 bg-red-400 w-[80px] h-[24px] rounded-lg font-medium'>Turn Off</button>
        </div>
        <div className='grid grid-cols-3 justify-items-center font-semibold'>
          <h1>CPU Usage</h1>
          <h1>MEM Usage</h1>
          <h1>Network I/O</h1>
        </div>
    </div>
  )
}
