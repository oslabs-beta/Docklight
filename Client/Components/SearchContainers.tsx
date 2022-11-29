import * as React from 'react'
import { SetStateAction } from 'react';

type ContainerData = {
  State: string,
  ID: string,
  Names: string,
}

type Props = {
  filteredData: string,
  setFiltered: React.Dispatch<SetStateAction<string>>
}
//will check for containers by name on change of text within the input box
export default function SearchContainers(props:Props) {

  // function filter(){
  //   let searchBox = document.getElementById('containerName').value
  //   const filteredContainers = props.contArray.filter((el) => {
  //     if (searchBox === '') return el
  //     else return el.Names.toLowerCase().includes(searchBox)
  //   })
  //   props.setList(filteredContainers)
  // }

  return (
    <div className='flex ml-auto mr-[50px] mt-[10px] items-center'>
        <p>Search Container by Name: </p>
        <input type='text' id='containerName' name='containerName' placeholder='Container Name'
        className='border-2 ml-[15px]' onChange={e => props.setFiltered(e.target.value)}></input>
    </div>
  )
}
