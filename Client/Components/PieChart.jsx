import * as React from 'react';
const { useEffect, useState } = React;
import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

export default function PieChart(props) {
  let { data } = props;
  data = parseFloat(data) * 10;
  
  const [chartData, setChartData] = useState({
    labels: ['Average Usage', 'Free Space'],
    datasets: [{
      data: [data, (100 - data)],
      backgroundColor: [
        'rgb(255, 99, 500)',
        'rgb(54, 162, 235)',
      ]
    }],
  });
    
  useEffect(() => {
    setChartData({
      labels: ['Usage', 'Free space'],
      datasets: [{
  
        data: [data, (100 - data)],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ]
      }],
    });
  }, [data]);
  
  return (
    <div>
      <Pie 
          
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