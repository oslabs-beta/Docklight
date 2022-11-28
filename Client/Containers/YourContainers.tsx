import * as React from "react";
const { useEffect, useState } = React;
import Active from "../Components/Active";
import Container from "../Components/Container";
import SearchContainers from "../Components/SearchContainers";
import InactiveContainers from "../Components/InactiveContainers";
import axios from "axios";

//should render the active/inactive filter buttons/component (will leave functionality for when we have components rendering)
//should render the search for container component
//should render each individual Container, for now will render a dummy container with data being passed in
type ContainerData = {
  State: string,
  ID: string,
  Names: string,
}

//need container object for TS checks
export default function YourContainers(){
  const [contArray, setList] = useState<ContainerData[]>([]);
  const [inactiveList, setInactiveList] = useState<ContainerData[]>([]);
  const [inactiveDisplay, setInactiveDisplay] = useState<boolean>(false);

  useEffect(() => {
    axios("cont/list")
      .then((res) => {
        console.log("this is res.data -> ", res.data);
        const runningArr:ContainerData[] = [];
        const inactiveArr:ContainerData[] = [];
        res.data.forEach((el:ContainerData) => {
          if (el.State === "running") runningArr.push(el);
          else inactiveArr.push(el);
          console.log(el)
        });
        setList(runningArr);
        setInactiveList(inactiveArr);
      })
      .catch((err) => console.log(err));
  }, []);

  function inactiveButton():void {
    if (inactiveDisplay === false) setInactiveDisplay(true);
  }

  function activeButton():void {
    if (inactiveDisplay === true) setInactiveDisplay(false);
  }

  function containerUnmount(currentCont: ContainerData) {
    axios.post('cont/off', { ID: currentCont.ID })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    setList(contArray.filter(container => container.ID !== currentCont.ID))
    setInactiveList((prevState) => [... prevState, currentCont])
  }

  function containerMount(currentCont: ContainerData){
    axios.post('cont/on', { ID: currentCont.ID })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    setList((prevState) => [... prevState, currentCont])
    setInactiveList(inactiveList.filter(container => container.ID !== currentCont.ID))
  }

  return (
    <>
      <header className="flex h-[61px] border-b-2 border-black shadow-md">
        <Active inactive={inactiveButton} active={activeButton} isInactive={inactiveDisplay} />
        <SearchContainers />
      </header>
      {inactiveDisplay
        ? 
        <div className='flex flex-wrap overflow-auto h-[95%]'>
          {inactiveList.map((container: ContainerData) => (
            <>
              <InactiveContainers key={`c${container.ID}`} info={container} mount={containerMount} testID={`${container.ID}`} />
            </>
          ))}
        </div>
        : 
        <div className="flex flex-col overflow-auto h-[95%] items-center">
          {contArray.map((container: ContainerData) => (
            <Container key={`c${container.ID}`} info={container} unmount={containerUnmount} testID={`${container.ID}`} />
          ))}
        </div>
      }
    </>
  );
}
