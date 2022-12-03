import * as React from 'react'
import { SetStateAction } from 'react';

//Props passed down from YourContainers
type Props = {
  filteredData: string,
  setFiltered: React.Dispatch<SetStateAction<string>>
}

//Purpose - Will filter displayed containers based on input value (filteredData)
export default function SearchContainers(props:Props) {

  return (
    <div className='flex ml-auto mr-[50px] mt-[10px] items-center'>
        <p>Search Container by Name: </p>
        <input type='text' id='containerName' name='containerName' placeholder='Container Name'
        className='border-2 ml-[15px]' onChange={e => props.setFiltered(e.target.value)}></input>
    </div>
  )
}
