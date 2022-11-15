import React from 'react';

//button functionality will control the filtering of active/inactive containers

export default function Active(props) {
  return (
    <div className='m-[15px]'>
      <button className='bg-green-500 w-[75px] h-[35px] rounded-l-lg' onClick={props.active}>Active</button>
      <button className='bg-red-400 w-[100px] h-[35px] rounded-r-lg' onClick={props.inactive}>Inactive</button>
    </div>
  )
}
