import * as React from 'react';
const { useEffect, useState } = React;
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


export default function BarChart(props) {
  console.log('initial data', props.data);
  const newData = props.data.reduce((acc, curr) => {
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
    MemPerc} = newData;

  const [chartData, setChartData] = useState({
    labels: ['Block In / BlockOut', 'CPU Usage', 'Memory Usage'],
    datasets: [ {
      label: 'Data 1',
      data: [BlockIn],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
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
        backgroundColor: 'rgba(100, 200, 200, 0.2)',
        borderColor: 'rgb(100, 200, 200)',
        borderWidth: 1,
      },
      {
        label: 'Percentages',
        data: [BlockOut, CPUPerc, MemPerc],
        backgroundColor: 'rgba(155, 255, 200, 0.2)',
        borderColor: 'rgb(155, 255, 200)',
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
          }}
        }      
      />
    </div>
  );
}
