import * as React from 'react'

export default function Notifications(props: any) {
    console.log(props.notifs)
  return (
    <div>
        <h1 className='font-extrabold text-lg p-1'>Container Notifications</h1>
        {props.notifs.map((str:any) => {return <h1>{str}</h1>})}
    </div>
  )
}
