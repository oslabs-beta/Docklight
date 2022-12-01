import * as React from "react";
const { useEffect, useState } = React;
import Active from "../Components/Active";
import Container from "../Components/Container";
import SearchContainers from "../Components/SearchContainers";
import InactiveContainers from "../Components/InactiveContainers";
import axios from "axios";
import Error from '../Components/Error'
import MissingContainers from '../Components/MissingContainers';


//Stream will give us data according to this type
type ContainerData = {
  State: string,
  ID: string,
  Names: string,
}

//Purpose - Will decide whether to render the Active containers or Inactive containers
export default function YourContainers(){
  const [contArray, setList] = useState<ContainerData[]>([]);
  const [inactiveList, setInactiveList] = useState<ContainerData[]>([]);
  const [inactiveDisplay, setInactiveDisplay] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [axiosComplete, setComplete] = useState<boolean>(false);
  const [filteredData, setFiltered] = useState<string>('');

  //Will make an axios request to get a list of all containers - then parse them and set it to the appropriate hooks
    //contArray - Active containers, inactiveList - Inactive containers
  //If the axios request completes successfully, the page will know to render the containers, on fail, display the Error component
  useEffect(() => {
    axios("cont/list")
      .then((res) => {
        const runningArr:ContainerData[] = [];
        const inactiveArr:ContainerData[] = [];
        res.data.forEach((el:ContainerData) => {
          if (el.State === "running") runningArr.push(el);
          else inactiveArr.push(el);
        });
        setList(runningArr);
        setInactiveList(inactiveArr);
        setComplete(true);
      })
      .catch((err) => {
        setError(true)
      });
  }, []);

  //Button functions to determine whether to display Active or Inactive containers - Passed down to Active.tsx
  function inactiveButton():void {
    if (inactiveDisplay === false) setInactiveDisplay(true);
  }

  function activeButton():void {
    if (inactiveDisplay === true) setInactiveDisplay(false);
  }

  //Button functions to let the user Unmount/deactive or Mount/activate their containers - Passed down to Container & InactiveContainers
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

  //Following two functions will render active/inactive containers for as long as the arrays are populated
    //If the arrays are empty at the end of the successful axios request, display MissingContainers component
  function activeRender(){
    if (contArray.length !== 0){
      return (
      <div className="flex flex-col overflow-auto h-[95%] items-center">
        {contArray.filter((cont: ContainerData) => cont.Names.toLowerCase().includes(filteredData)).map((container: ContainerData) => (
          <Container key={`c${container.ID}`} info={container} unmount={containerUnmount} testID={`${container.ID}`} />
        ))}
      </div>
      )
    } else {
      if (axiosComplete) {
        return (
          <MissingContainers activeOrInactive="Active" />
        )
      }
    }
  }

  function inactiveRender(){
    if (inactiveList.length !== 0){
      return(
        <div className='flex flex-wrap overflow-auto h-auto'>
          {inactiveList.filter((cont: ContainerData) => cont.Names.toLowerCase().includes(filteredData)).map((container: ContainerData) => (
            <>
              <InactiveContainers key={`c${container.ID}`} info={container} mount={containerMount} testID={`${container.ID}`} />
            </>
          ))}
        </div>
      )
    } else {
      if (axiosComplete){
        return(
          <MissingContainers activeOrInactive="Inactive" />
        )
      }
    }
  }

  //As long as there is no error (usually from Docker Desktop not running/failed axios request), load page & container data
  //By default - Active containers will display first, then change dependant on Active button clicks
  if (!error && axiosComplete) {
    return (
      <>
        <header className="flex h-[61px] border-b-2 border-black shadow-md">
          <Active inactive={inactiveButton} active={activeButton} isInactive={inactiveDisplay} />
          <SearchContainers filteredData={filteredData} setFiltered={setFiltered} />
        </header>
        {inactiveDisplay
          ? 
          inactiveRender()
          : 
          activeRender()
        }
      </>
    )
  } else if (error) {
    return <Error />
  };
}
