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
      label: string
      data: number[]
      backgroundColor: string[]
    }[],
}

export default function StatChart(props: Props) {
  let { propData } = props;


  const [chartData, setChartData] = useState<ChartData>({
    labels: ['Usage', 'Free Space'],
    datasets: [{
      label: 'Container Use Ratio',
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
        label: 'Container Use Ratio',
        data: [newData, (100 - newData)],
        backgroundColor: [
          'rgba(75, 48, 232, 0.75)',
          'rgba(53, 53, 235, 0.60)',
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