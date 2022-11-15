import * as React from 'react';
const { useEffect, useState } = React;
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

export default function StatChart(props) {
  const { data } = props;
  const conData = {
    datasets: [{
      labels: ['CPU use', 100],
      data: [data],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ]
    }],
  };
  return (
    <div>
      <Doughnut 
        data={conData}
      />
    </div>
  );
}