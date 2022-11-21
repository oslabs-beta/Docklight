import * as React from 'react';
const { useEffect, useState, useRef, useMemo, useCallback } = React;
import Chart from 'chart.js/auto';
import 'chartjs-adapter-luxon';
import { Line } from 'react-chartjs-2';
import ChartStreaming from 'chartjs-plugin-streaming';
Chart.overrides.line.spanGaps = true;
Chart.register(ChartStreaming);

export default function LineChart(props) {
  const { data } = props;
  const chart = useRef();
  const dataArr = dataSplit(data);


  const [chartData, setChartData] = useState({
    datasets: [
      {
        id: 1,
        label: ['Network Input'],
        data: [dataArr[0]],
        backgroundColor: ['rgb(255, 99, 132)'],
        spanGaps: true
      },
      {
        label: ['Network Output'],
        data: [dataArr[1]],
        backgroundColor: ['rgb(255, 99, 000)'],
        spanGaps: true
      },
    ],
  });

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log('this is data', dataArr);
  //     console.log('hi');
  //     // const newData = {
  //     //   value1: dataArr[0],
  //     //   value2: dataArr[1],
  //     //   timestamp: new Date(),
  //     // };
  //     //setData(newData);
  //     chart.current.update('quiet')
  //     setChartData((prevState) => ({
  //       ...prevState,
  //       datasets: [
  //         {
  //           ...prevState.datasets[0],
  //           backgroundColor: ['rgb(255, 99, 132)'],
  //         },
  //         {
  //           ...prevState.datasets[1],
  //           backgroundColor: ['rgb(255, 99, 000)'],
  //         },
  //       ],
  //     }));
  //   }, 1000);
  // }, []);

  useEffect(() => {
    const newData = {
      value1: dataArr[0],
      value2: dataArr[1],
      timestamp: new Date(),
    };
    setData(newData);
    setChartData((prevState) => ({
      ...prevState,
      datasets: [
        {
          ...prevState.datasets[0],
          backgroundColor: ['rgb(255, 99, 132)'],
        },
        {
          ...prevState.datasets[1],
          backgroundColor: ['rgb(255, 99, 000)'],
        },
      ],
    }));
    // setInterval(() => {
    //   console.log('this is data', dataArr);
    //   console.log('hi');
    //   // const newData = {
    //   //   value1: dataArr[0],
    //   //   value2: dataArr[1],
    //   //   timestamp: new Date(),
    //   // };
    //   //setData(newData);
    //   setData(newData);
    //   setChartData((prevState) => ({
    //     ...prevState,
    //     datasets: [
    //       {
    //         ...prevState.datasets[0],
    //         backgroundColor: ['rgb(255, 99, 132)'],
    //       },
    //       {
    //         ...prevState.datasets[1],
    //         backgroundColor: ['rgb(255, 99, 000)'],
    //       },
    //     ],
    //   }));
    // }, 1000);
  }, [chartData]);

  function setData(event) {
    chart.current.data.datasets[0].data.push({
      x: event.timestamp,
      y: event.value1,
    });
    chart.current.data.datasets[1].data.push({
      x: event.timestamp,
      y: event.value2,
    });
    chart.current.update('quiet');
  }

  function dataSplit(string) {
    if (!string) {
      return [];
    }
    const result = [];
    const stringArr = string.split(' / ');
    stringArr.forEach((el) => {
      if (el.includes('kB')) {
        el = parseFloat(el);
      } else {
        el = parseFloat(el) / 1000;
      }
      result.push(el);
    });
    return result;
  }

  return (
    <div>
      <Line
        datasetIdKey="id"
        ref={chart}
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
            streaming: {
              duration: 20000,
            },
          },
          scales: {
            x: {
              type: 'realtime',
              realtime: {
                duration: 20000,
                frameRate: 5,
                delay: 1000,
              },
            },
          },
          elements: {
            line: {
              spanGaps: true
            }
          }
        }}
      />
    </div>
  );
}
