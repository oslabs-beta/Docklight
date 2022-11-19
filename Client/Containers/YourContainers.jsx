import * as React from "react";
const { useEffect, useState } = React;
import Active from "../Components/Active";
import Container from "../Components/Container.jsx";
import SearchContainers from "../Components/SearchContainers";
import axios from "axios";
import InactiveContainers from "../Components/InactiveContainers";

//cpuUsage is a percentage already, as is mem
const dummyContainer = {
  name: "Test",
  id: "t1e3s3t7",
  cpuUsage: 40.3,
  memUsage: 13.5,
  limit: 7475,
  mem: 0.17,
  netIO: 29,
  netIOB: 1000,
};

//should render the active/inactive filter buttons/component (will leave functionality for when we have components rendering)
//should render the search for container component
//should render each individual Container, for now will render a dummy container with data being passed in

export default function YourContainers(props) {
  const [contArray, setList] = useState([]);
  const [inactiveList, setInactiveList] = useState([]);
  const [inactiveDisplay, setInactiveDisplay] = useState(false);

  useEffect(() => {
    axios("cont/list")
      .then((res) => {
        console.log("this is res.data -> ", res.data);
        const runningArr = [];
        const inactiveArr = [];
        res.data.forEach((el) => {
          if (el.State === "running") runningArr.push(el);
          else inactiveArr.push(el);
        });
        setList(runningArr);
        setInactiveList(inactiveArr);
        // setList(res.data.slice(0));
      })
      .catch((err) => console.log(err));
  }, []);

  function inactiveButton() {
    if (inactiveDisplay === false) setInactiveDisplay(true);
  }

  function activeButton() {
    if (inactiveDisplay === true) setInactiveDisplay(false);
  }

  return (
    <>
      <header className="flex h-[61px] border-b-2 border-black shadow-md">
        <Active inactive={inactiveButton} active={activeButton} isInactive={inactiveDisplay} />
        <SearchContainers />
      </header>
      {inactiveDisplay
        ? 
        <div className='flex flex-wrap'>
          {inactiveList.map((container) => (
            <>
              <InactiveContainers key={`c${container.ID}`} info={container} />
              <InactiveContainers key={`c${container.ID}`} info={container} />
            </>
          ))}
        </div>
        : 
        <div className="flex flex-col overflow-auto h-[95%] items-center">
          {contArray.map((container) => (
            <Container key={`c${container.ID}`} info={container} />
          ))}
        </div>
      }
    </>
  );
}
