import * as React from 'react';
const { useEffect, useState } = React;
import StatChart from '../Client/Charts/StatChart';
import LineChart from '../Client/Charts/LineChart';
import Loader from '../Client/Utility/Loader'
import { MouseEventHandler } from 'react';

type Props = {
  info: {
    State: string,
    ID: string,
    Names: string,
  },
  unmount: any,
  testID: string
};

type DataBlock = {
  NetIO: string,
  CPUPerc: string,
  MemPerc: string
};

type DataInfo = DataBlock[];

//will need to render individual components for CPU, MEM & Network IO
export default function TestContainer(props:Props) {
  const { ID, Names } = props.info;
  const [dataInfo, setData] = useState<DataInfo>([]);
  const [change, setChange] = useState<boolean>(false);
  
  return (
    <div className="mt-[40px] mb-[10px] border-4 border-blue-400 rounded-lg h-[300px] w-[900px] shadow-lg" data-testid={`${props.testID}`}>
      <div className="grid grid-cols-3 gap-5 mt-2 ml-2 mb-8 font-semibold">
        <h1>Container Name: {Names}</h1>
        <h1>Container ID: {ID} </h1>
        <button onClick={() => props.unmount(props.info)} className="ml-auto mr-3 bg-red-400 w-[80px] h-[24px] rounded-lg font-medium">
          Unmount
        </button>
      </div>
      {dataInfo.length === 0 ? 
        <Loader />
        : 
        <div className="grid grid-cols-3 justify-items-center font-semibold mt-2">
          <div className='mb-4'>
            <h1 className="flex justify-center mb-2">
            CPU Usage: {dataInfo[0].CPUPerc}
            </h1>
            <StatChart propData={dataInfo[0].CPUPerc} />
          </div>
          <div className='mb-4'>
            <h1 className="flex justify-center mb-2">
            MEM Usage: {dataInfo[0].MemPerc}
            </h1>
            <StatChart propData={dataInfo[0].MemPerc} />
          </div>
          <div className='mb-4 mr-2'>
            <h1 className="flex justify-center mb-2">
            Network I/O: {dataInfo[0].NetIO}
            </h1>
            <LineChart propData={dataInfo[0].NetIO} change={change}/>
          </div>
        </div>
      }
    </div>
  );
}