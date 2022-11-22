import * as React from 'react'

//will check for containers by name on change of text within the input box
export default function SearchContainers() {
  return (
    <div className='flex ml-auto mr-[50px] mt-[10px] items-center'>
        <p>Search Container by Name: </p>
        <input type='text' id='containerName' name='containerName' placeholder=' Container Name'
        className='border-2 ml-[15px]'></input>
    </div>
  )
}
