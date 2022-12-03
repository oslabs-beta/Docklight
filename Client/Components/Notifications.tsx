import * as React from 'react'

//Props passed from DataOverview - Dropped feature that was a WIP, was displaying notifications if a container's
  //CPU/MEM usage was really high
export default function Notifications(props: any) {
    console.log(props.notifs)
  return (
    <div>
        <h1 className='font-extrabold text-lg p-1'>Container Notifications</h1>
        {props.notifs.map((str:any) => {return <h1>{str}</h1>})}
    </div>
  )
}
