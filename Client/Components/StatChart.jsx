import * as React from 'react';
const { useEffect, useState } = React;
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

export default function StatChart(props) {
  let { data } = props;
  data = parseFloat(data) * 10;

  const [chartData, updateChart] = useState({
    datasets: [{
      labels: ['CPU use', 'total'],
      data: [data, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ]
    }],
  });
  
  useEffect(() => {
    updateChart({
      datasets: [{
        labels: ['CPU use', 'total'],
        data: [data, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ]
      }],
    });
  }, [data]);

  // const chartData = {
  //   datasets: [{
  //     labels: ['CPU use', 'total'],
  //     data: [data, 100],
  //     backgroundColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(54, 162, 235)',
  //     ]
  //   }],
  // };
  return (
    <div>
      <Doughnut 
        
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'hi'
            },
            legend: {
              display: true,
              position: 'bottom'
          }
        }}
      }
      />
    </div>
  );
}