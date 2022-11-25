import * as React from 'react';
const { useEffect, useState } = React;
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

type Props = {
  propData: string
}

type ChartData = {
    labels: string[],
    datasets: {
      data: number[]
      backgroundColor: string[]
    }[],
}

export default function StatChart(props: Props) {
  let { propData } = props;


  const [chartData, setChartData] = useState<ChartData>({
    labels: ['Usage', 'Free Space'],
    datasets: [{
      data: [0, 0],
      backgroundColor: [
        'rgb(255, 99, 500)',
        'rgb(54, 162, 235)',
      ]
    }],
  });
  
  useEffect(() => {
    const newData: number = parseFloat(propData);
    setChartData({
      labels: ['Usage', 'Free space'],
      datasets: [{

        data: [newData, (100 - newData)],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ]
      }],
    });
  }, [propData]);

  return (
    <div>
      <Doughnut 
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true,
              position: 'bottom'
            }
          },
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}