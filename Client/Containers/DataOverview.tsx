import * as React from 'react'
import OverviewContainer from '../Components/OverviewContainer'

export default function DataOverview() {
  const containersArray = [
    {
    "BlockIO":"0B / 0B",
    "CPUPerc":"0.00%",
    "Container":"3e2836e39536",
    "ID":"3e2836e39536",
    "MemPerc":"0.15%",
    "MemUsage":"11.57MiB / 7.475GiB",
    "Name":"crazy_tu",
    "NetIO":"1.08kB / 0B",
    "PIDs":"17"
    },
    {
        "BlockIO":"0B / 0B",
        "CPUPerc":"38%",
        "Container":"3e2836e39536",
        "ID":"3e2836e39536",
        "MemPerc":"0.15%",
        "MemUsage":"11.57MiB / 7.475GiB",
        "Name":"crazy_tu",
        "NetIO":"1.08kB / 0B",
        "PIDs":"17"
    },
    {
            "BlockIO":"0B / 0B",
            "CPUPerc":"90%",
            "Container":"3e2836e39536",
            "ID":"3e2836e39536",
            "MemPerc":"0.15%",
            "MemUsage":"11.57MiB / 7.475GiB",
            "Name":"crazy_tu",
            "NetIO":"1.08kB / 0B",
            "PIDs":"17"
    }

]


    return (
      <> 
      <div className='text-center p-5 max-h-[10%] items-center text-3xl font-bold underlined'>
      <header className='content-center'>dataoverview</header>
      </div>
      <div className='grid overflow-auto h-[50%]'> 
      {containersArray.length === 0 ? <header> No container to show</header> :  <OverviewContainer/>}
      </div>
      </>
    )
}
