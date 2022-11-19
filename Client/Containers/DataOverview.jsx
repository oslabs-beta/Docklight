import * as React from 'react';
const { useState, useEffect } = React;
import OverviewContainer from '../Components/OverviewContainer';
import Notifications from '../Components/Notifications';
import PieChart from '../Components/PieChart.jsx';
import Loader from '../Utility/Loader';

export default function DataOverview() {

  const [containersArray, setContainersArray] = useState([]);

  useEffect(() => {
    const sse = new EventSource('http://localhost:3000/cont/fullstream');
    sse.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setContainersArray(data);
    };
    sse.onerror = () => sse.close();
    console.log('data info', containersArray);
    return () => {
      sse.close();
    };
  }, []);


  const notifs = [];
  for (let i = 0; i < containersArray.length; i++) {
    // we would need to loop through the array of containers
    const element = containersArray[i];
    //string to be reasigned after we check the health of the container
    let health = 'Good Shape';
    let danger = 'border-blue-400';
    //removing everything and leaving only numbers
    const cpu = Number(element.CPUPerc.replace(/\D+/g, '').slice(0, 2));
    const memory = Number(element.MemPerc.replace(/\D+/g, '').slice(0, 2));

    if (cpu > 75 || memory > 75) {
      health = 'Bad Shape';
      danger = 'border-red-400';
    }
    if (cpu > 75) {
      notifs.push(
        `Container ${containersArray[i].Name} has a very high CPU Usage!`,
      );
    }
    if (memory > 75) {
      notifs.push(
        `Container ${containersArray[i].Name} has a very high MEM Usage!`,
      );
    }
    // containers.push(
    //   <OverviewContainer
    //     key={`c${containersArray[i].ID}`}
    //     id={`containerNum${i}`}
    //     name={containersArray[i].Name}
    //     health={health}
    //     notifs={notifs}
    //     className={`justify-self-center border-4 ${danger} rounded-md max-h-[5%] min-h-[100%] min-w-[100%] `}
    //   />,
    // );
  }

  return (
    <>
      <div className="text-center p-5 h-[7%] items-center text-3xl font-bold underlined">
        <header className="content-center">Data Overview</header>
      </div>
      {containersArray.length === 0
        ? 
        <Loader />
        : (
          <div className='overflow-auto'>
            <div 
              className="grid overflow-auto grid-cols-2 grid-rows-2 gap-4 sm:h-[700px] lg:h-[790px] xl:h-[900px] 2xl:h-[950px] justify-items-center mt-[10px]">
              <PieChart colstart='col-start-2' data={containersArray.map(container => parseFloat(container.CPUPerc) * 10)} title={'Average CPU Usage'}/>
              <PieChart colstart='col-start-3' data={containersArray.map(container => parseFloat(container.MemPerc) * 10)} title={'Average Memory Usage'}/>
              <PieChart colstart='col-start-2' data={containersArray.map(container => parseFloat(container.CPUPerc) * 10)} title={'Average CPU Usage'}/>
              <PieChart colstart='col-start-3' data={containersArray.map(container => parseFloat(container.MemPerc) * 10)} title={'Average Memory Usage'}/>
            </div>
            {/* <div className="border-t-4 h-[25%]">
              <Notifications notifs={notifs} />
            </div> */}
          </div>
        )}
    </>
  );
}
