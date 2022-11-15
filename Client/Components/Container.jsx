import * as React from 'react';
const { useEffect, useState } = React;
import StatChart from './StatChart.jsx';
import LineChart from './LineChart.jsx';


//will need to render individual components for CPU, MEM & Network IO
export default function Container(props) {
  const { ID, Names } = props.info;
  const sse = new EventSource(`http://localhost:3000/cont/constream/?id=${ID}`);
  const [dataInfo, setData] = useState([]);

  useEffect(() => {
    sse.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setData(data);
    };
    sse.onerror = () => sse.close();
    console.log('data info', dataInfo);
    return () => {
      sse.close();
    };
  }, []);


  return (
    <div className='justify-self-center mt-[50px] border-4 border-blue-400 rounded-md min-h-[350px] min-w-[900px]'>
      <div className='grid grid-cols-3 gap-5 mt-2 ml-2 mb-8 font-semibold'>
        <h1>Container Name: {Names}</h1>
        <h1>Container ID: {ID} </h1>
        <button className='ml-auto mr-3 bg-red-400 w-[80px] h-[24px] rounded-lg font-medium'>Turn Off</button>
      </div>
      <div className='grid grid-cols-3 justify-items-center font-semibold'>
        <div>        
          <h1>CPU Usage: { dataInfo[0] ? dataInfo[0].CPUPerc : 0 }</h1>
          <StatChart data={ dataInfo[0] ? dataInfo[0].CPUPerc : 0 } />

        </div>
        <div>
          <h1>MEM Usage: {dataInfo[0] ? dataInfo[0].MemPerc : 0}</h1>
          <StatChart data={dataInfo[0] ? dataInfo[0].MemPerc : 0} />
        </div>
        <div>
          <h1>Network I/O: {dataInfo[0] ? dataInfo[0].NetIO : 0}</h1>
          <LineChart data={dataInfo[0] ? dataInfo[0].NetIO : 0} />
        </div>
      </div>
    </div>
  );
}

//defunct ref component here currently 
// export default function Container(props) {
//   const { ID, Names } = props.info;
//   const sse = new EventSource(`http://localhost:3000/cont/constream/?id=${ID}`);
//   const [dataInfo, setData] = useState([]);
  
//   const CPU = useRef(0);
//   const MEM = useRef(0);
//   const IO = useRef(0);

//   useEffect(() => {
//     sse.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       setData(data);
//     };
  
//   }, []);

//   /* 
//     const getStats = async () => {
//       try {
//         sse.onmessage = (event) => {
//           const data = JSON.parse(event.data);
//           //setData(data);
//         }
//       catch (error)
//       }
//     } 
//   */

//   useEffect(() => {
//     sse.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       //setData(data);
//       console.log('heres data', data)
//       console.log('heres CPU', CPU)
//       console.log('CPU current', CPU.current)
//       CPU.current = data[0].CPUPerc;
//       MEM.current = data[0].MemPerc;
//       IO.current = data[0].NetIO;
//     };
//     sse.onerror = () => sse.close;
//     // console.log('data info', dataInfo);
//   });

//   return (
//     <div className='justify-self-center mt-[50px] border-4 border-blue-400 rounded-md min-h-[350px] min-w-[900px]'>
//         <div className='grid grid-cols-3 gap-5 mt-2 ml-2 mb-8 font-semibold'>
//           <h1>Container Name: {Names}</h1>
//           <h1>Container ID:{ID} </h1>
//           <button className='ml-auto mr-3 bg-red-400 w-[80px] h-[24px] rounded-lg font-medium'>Turn Off</button>
//         </div>
//         <div className='grid grid-cols-3 justify-items-center font-semibold'>
//           <h1  >CPU Usage: { CPU.current }</h1>
//           <h1  >MEM Usage: { MEM.current }</h1>
//           <h1  >Network I/O: { IO.current }</h1>
//         </div>
//     </div>
//   );
// }
