import * as React from 'react'

//button functionality will control the filtering of active/inactive containers

export default function Active() {
  return (
    <div className='m-[15px]'>
        <button className='bg-green-500 w-[75px] h-[35px] rounded-l-lg'>Active</button>
        <button className='bg-red-400 w-[100px] h-[35px] rounded-r-lg'>Inactive</button>
    </div>
  )
}
