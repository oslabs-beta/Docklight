import * as React from 'react'
// import React, {FC} from 'react';

const OverviewContainer = () => {

//we will first get a list of containers with metrics 
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
        "CPUPerc":"60.23%",
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
            "CPUPerc":"90.99%",
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
        "CPUPerc":"90.99%",
        "Container":"3e2836e39536",
        "ID":"3e2836e39536",
        "MemPerc":"85.15%",
        "MemUsage":"11.57MiB / 7.475GiB",
        "Name":"crazy_tu",
        "NetIO":"1.08kB / 0B",
        "PIDs":"17"
}

]

//if the containers array is emtpy display : You don't have any containers to show

//else :

//we would need useeffect to check run the functionality each time, in order to check which container should go to the top

const containers = [];
for(let i = 0; i < containersArray.length; i++){
// we would need to loop through the array of containers
const element = containersArray[i];
//string to be reasigned after we check the health of the container
let health:string = 'Good Shape'
let danger:string = 'border-blue-400'
//removing everything and leaving only numbers
const cpu = Number(element.CPUPerc.replace(/\D+/g, '').slice(0, 2));
const memory = Number(element.CPUPerc.replace(/\D+/g, '').slice(0, 2));

if(cpu > 75 || memory > 75) {
    health = 'Bad Shape'
    danger = 'border-red-400'
};




containers.push(<div key={i} id={`containerNum${i}`} className={`justify-self-center border-4 ${danger} rounded-md max-h-[5%] min-h-[70%] min-w-[100%]`}>
<h6 className='justify-self-center' >Container Name: {containersArray[i].Name}</h6>  
<span className='justify-self-center'>Container Health: {health} </span>
</div> )
 //checking for cpu and memory 
  //if the cpu or memory are over 65% 
   //change the border to red

}

 //depending on that we would show the health of the container


  return (
    <>
    {containers}
    </>
  )
}
export default OverviewContainer;