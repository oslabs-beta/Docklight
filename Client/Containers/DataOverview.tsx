import * as React from 'react';
const { useState, useEffect } = React;
// import OverviewContainer from '../Components/OverviewContainer';
// import Notifications from '../Components/Notifications';
import BarChart from '../Charts/BarChart';
import Loader from '../Utility/Loader';
import Error from '../Components/Error'

//Incoming container Data from stream
type Container = {
  BlockIO: string
  CPUPerc: string
  Container: string
  ID: string
  MemPerc: string
  MemUsage: string
  Name: string
  NetIO: string
  PIDS: string
}

//Purpose of container is to display averages of all active containers
export default function DataOverview() {
  const [containersArray, setContainersArray] = useState<Container[]>([]);
  const [error, setError] = useState(false);

  //Will start the stream and get averaged data, setting it to containersArray
  useEffect(() => {
    const sse = new EventSource('http://localhost:3000/cont/fullstream');
    sse.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      setContainersArray(data);
    };
    //If there is an error for the stream (Docker not running / No active containers) - setup for Error Component
    sse.onerror = () => {
      setError(true)
      return sse.close();
    }
    //Cleanup
    return () => {
      sse.close();
    };
  }, []);
    
  //For as long as there is no error - render below
  if(!error) {
    return (
      <>
        <div className="text-center p-5 h-[7%] items-center text-3xl font-bold underlined">
          <header className="content-center">Data Overview</header>
        </div>
        {/* When the data hasn't come in yet, render Loader, then render BarChart */}
        {containersArray.length === 0
          ? 
          <Loader />
          : (
            <div className='grid justify-items-center mt-10'>
            <div className='w-[80%] h-[80%]'>
                <BarChart data={containersArray.map(container => {
                  const BlockIn = container.BlockIO.split(' / ')[0];
                  const BlockOut = container.BlockIO.split(' / ')[1];
                  return ({
                    CPUPerc: parseFloat(container.CPUPerc) * 10,
                    MemPerc: parseFloat(container.MemPerc) * 10,
                    BlockIn: parseFloat(BlockIn),
                    BlockOut: parseFloat(BlockOut),
                  });
                })} />
            </div>
            <p className='mt-10 text-xl font-normal'>Above you can see the average Block In, CPU Usage and Memory Usage for all of your containers</p>
            </div>
          )}
      </>
    )
  } else {
    //If there is an error -- 
    return <Error />
  };
}

  //Code for notifications -- dropped feature
    // const notifs = [];
    // for (let i = 0; i < containersArray.length; i++) {
    //   // we would need to loop through the array of containers
    //   const element = containersArray[i];
    //   //string to be reasigned after we check the health of the container
    //   let health: string = 'Good Shape';
    //   let danger: string = 'border-blue-400';
    //   //removing everything and leaving only numbers
    //   const cpu: number = Number(element.CPUPerc.replace(/\D+/g, '').slice(0, 2));
    //   const memory: number = Number(element.MemPerc.replace(/\D+/g, '').slice(0, 2));

    //   if (cpu > 75 || memory > 75) {
    //     health = 'Bad Shape';
    //     danger = 'border-red-400';
    //   }
    //   if (cpu > 75) {
    //     notifs.push(
    //       `Container ${containersArray[i].Name} has a very high CPU Usage!`,
    //     );
    //   }
    //   if (memory > 75) {
    //     notifs.push(
    //       `Container ${containersArray[i].Name} has a very high MEM Usage!`,
    //     );
    //   }
    //   // containers.push(
    //   //   <OverviewContainer
    //   //     key={`c${containersArray[i].ID}`}
    //   //     id={`containerNum${i}`}
    //   //     name={containersArray[i].Name}
    //   //     health={health}
    //   //     notifs={notifs}
    //   //     className={`justify-self-center border-4 ${danger} rounded-md max-h-[5%] min-h-[100%] min-w-[100%] `}
    //   //   />,
    //   // );
    // }

              //Render code for the notifications container
                // {/* <div className="border-t-4 h-[25%]">
                //   <Notifications notifs={notifs} />git
                // </div> */}