import * as React from 'react';
const { useEffect, useState } = React;
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

type DataObject = {
  [key:string]: number,
  CPUPerc: number,
  MemPerc: number,
  BlockIn: number,
  BlockOut: number
}


type Props = {
  data: DataObject[]
}

type Dataset = {
  label: string,
  data: number[],
  backgroundColor: string,
  borderColor: string,
  borderWidth: number
}

type BarData = {
  labels: string[],
  datasets: Dataset[]
}

export default function BarChart(props: Props) {
  console.log('initial data', props.data);
  const newData:DataObject = props.data.reduce((acc: DataObject, curr: DataObject) => {
    acc.BlockIn += curr.BlockIn;
    acc.BlockOut += curr.BlockOut; 
    acc.CPUPerc += curr.CPUPerc;
    acc.MemPerc += curr.MemPerc;
    return acc;
  });

  for (const prop in newData) {
    newData[prop] = newData[prop] / props.data.length;
  }
  const { BlockIn, 
    BlockOut, 
    CPUPerc, 
    MemPerc } = newData;

  const [chartData, setChartData] = useState<BarData>({
    labels: ['Block In / BlockOut', 'CPU Usage', 'Memory Usage'],
    datasets: [ {
      label: 'Data 1',
      data: [BlockIn],
      backgroundColor: 'rgba(53, 53, 235, 0.75)',
      borderColor: 'rgba(53, 53, 235)',
      borderWidth: 1,
    },
    {
      label: 'Data 2',
      data: [BlockOut, CPUPerc, MemPerc],
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1
    }
    ]
  });

  useEffect(() => {
    console.log('heres data', props.data);
    setChartData({
      labels: ['Block In / BlockOut', 'CPU Usage', 'Memory Usage'],
      datasets: [ {
        label: 'In / Out',
        data: [BlockIn],
        backgroundColor: 'rgba(53, 53, 235, 0.60)',
        borderColor: 'rgba(53, 53, 235)',
        borderWidth: 1,
      },
      {
        label: 'Percentages',
        data: [BlockOut, CPUPerc, MemPerc],
        backgroundColor: 'rgba(75, 48, 232, 0.75)',
        borderColor: 'rgb(75, 48, 232)',
        borderWidth: 1
      }
      ]
    });
  }, [props.data]);

  return (
    <div>
      <Bar 
        data={chartData}
        options={{
          plugins: {            
            title: {
              display: true,
              text: 'Average of Data',
            },
            legend: {
              display: true,
              position: 'bottom'
            }
          },
          scales: {
            x: {
              stacked: true,
            },
          },
          indexAxis: 'y'
        }}      
      />
    </div>
  );
}
