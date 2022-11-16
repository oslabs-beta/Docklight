import * as React from "react";
import OverviewContainer from "../Components/OverviewContainer";
import Notifications from "../Components/Notifications";

export default function DataOverview() {
  const containersArray = [
    {
      BlockIO: "0B / 0B",
      CPUPerc: "0.00%",
      Container: "3e2836e39536",
      ID: "3e2836e39536",
      MemPerc: "0.15%",
      MemUsage: "11.57MiB / 7.475GiB",
      Name: "crazy_tu125125",
      NetIO: "1.08kB / 0B",
      PIDs: "17",
    },
    {
      BlockIO: "0B / 0B",
      CPUPerc: "38%",
      Container: "3e2836e39536",
      ID: "3e2836e39536",
      MemPerc: "0.15%",
      MemUsage: "11.57MiB / 7.475GiB",
      Name: "crazy_tu125",
      NetIO: "1.08kB / 0B",
      PIDs: "17",
    },
    {
      BlockIO: "0B / 0B",
      CPUPerc: "90%",
      Container: "3e2836e39536",
      ID: "3e2836e39536",
      MemPerc: "0.15%",
      MemUsage: "11.57MiB / 7.475GiB",
      Name: "crazy_tu1347",
      NetIO: "1.08kB / 0B",
      PIDs: "17",
    },
    {
      BlockIO: "0B / 0B",
      CPUPerc: "0.00%",
      Container: "3e2836e39536",
      ID: "3e2836e39536",
      MemPerc: "0.15%",
      MemUsage: "11.57MiB / 7.475GiB",
      Name: "crazy_tu1458",
      NetIO: "1.08kB / 0B",
      PIDs: "17",
    },
    {
      BlockIO: "0B / 0B",
      CPUPerc: "90%",
      Container: "3e2836e39536",
      ID: "3e2836e39536",
      MemPerc: "0.15%",
      MemUsage: "11.57MiB / 7.475GiB",
      Name: "crazy_tu17345",
      NetIO: "1.08kB / 0B",
      PIDs: "17",
    },
    {
      BlockIO: "0B / 0B",
      CPUPerc: "0.00%",
      Container: "3e2836e39536",
      ID: "3e2836e39536",
      MemPerc: "0.15%",
      MemUsage: "11.57MiB / 7.475GiB",
      Name: "crazy_tu1834513",
      NetIO: "1.08kB / 0B",
      PIDs: "17",
    },
    {
      BlockIO: "0B / 0B",
      CPUPerc: "90%",
      Container: "3e2836e39536",
      ID: "3e2836e39536",
      MemPerc: "0.15%",
      MemUsage: "11.57MiB / 7.475GiB",
      Name: "crazy_tu181345",
      NetIO: "1.08kB / 0B",
      PIDs: "17",
    },
    {
      BlockIO: "0B / 0B",
      CPUPerc: "90%",
      Container: "3e2836e39536",
      ID: "3e2836e39536",
      MemPerc: "0.15%",
      MemUsage: "11.57MiB / 7.475GiB",
      Name: "crazy_tu177777",
      NetIO: "1.08kB / 0B",
      PIDs: "17",
    },
    {
      BlockIO: "0B / 0B",
      CPUPerc: "90%",
      Container: "3e2836e39536",
      ID: "3e2836e39536",
      MemPerc: "0.15%",
      MemUsage: "11.57MiB / 7.475GiB",
      Name: "crazy_tu7777777",
      NetIO: "1.08kB / 0B",
      PIDs: "17",
    },
  ];
  const notifs = [];
  const containers = [];
  for (let i = 0; i < containersArray.length; i++) {
    // we would need to loop through the array of containers
    const element = containersArray[i];
    //string to be reasigned after we check the health of the container
    let health: string = "Good Shape";
    let danger: string = "border-blue-400";
    //removing everything and leaving only numbers
    const cpu = Number(element.CPUPerc.replace(/\D+/g, "").slice(0, 2));
    const memory = Number(element.CPUPerc.replace(/\D+/g, "").slice(0, 2));

    if (cpu > 75 || memory > 75) {
      health = "Bad Shape";
      danger = "border-red-400";
    }
    containers.push(
      <OverviewContainer
        key={i}
        id={`containerNum${i}`}
        name={containersArray[i].Name}
        health={health}
        className={`justify-self-center border-4 ${danger} rounded-md max-h-[5%] min-h-[100%] min-w-[100%] `}
      />
    );
    if (cpu > 75) notifs.push(`Container ${containersArray[i].Name} has a very high CPU Usage!`)
    if (memory > 75) notifs.push(`Container ${containersArray[i].Name} has a very high MEM Usage!`)
  }

  //is there a way to override the parent contianer with 
  //grid overflow == no
  
  return (
    <>
      <div className="text-center p-5 max-h-[10%] items-center text-3xl font-bold underlined">
        <header className="content-center">dataoverview</header>
      </div>
      <div className="grid overflow-auto h-[70%]">
        {containersArray.length === 0 ? (
          <header> No container to show</header>
        ) : (
          containers
        )}
      </div>
      <div className='border-t-4 h-[25%] border-blue-400'>
        <Notifications notifs={notifs} />
      </div>
    </>
  );
}
