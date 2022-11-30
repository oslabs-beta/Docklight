import * as React from 'react';
const { useEffect, useState, useRef } = React;
import Chart from 'chart.js/auto';
import type { ChartData, ChartOptions } from 'chart.js';
import 'chartjs-adapter-luxon';
import { Line } from 'react-chartjs-2';
import ChartStreaming from 'chartjs-plugin-streaming';
Chart.overrides.line.spanGaps = true;
Chart.register(ChartStreaming);

type Props = {
  propData: string
  change: boolean
}
type OurChartData = {
  datasets: {
    label: string[],
    data: number[],
    backgroundColor: string[],
    spanGaps: boolean
  }[],
}

type DataObj = {
  value1: number,
  value2: number,
  timestamp: Date
}

export default function LineChart(props: Props) {
  const { propData, change } = props;
  const chart = useRef<Chart<'line'>>();
  const dataArr = dataSplit(propData);


  const [chartData, setChartData] = useState<any>({
    datasets: [
      {
        label: ['Network Input'],
        data: [dataArr[0]],
        backgroundColor: ['rgba(38, 189, 106, 0.75)'],
        spanGaps: true
      },
      {
        label: ['Network Output'],
        data: [dataArr[1]],
        backgroundColor: ['rgba(221, 80, 105, 0.75)'],
        spanGaps: true
      },
    ],
  })

  useEffect(() => {
    console.log(change)
    const newData = {
      value1: dataArr[0],
      value2: dataArr[1],
      timestamp: new Date(),
    };
    setData(newData);
    setChartData((prevState: OurChartData) => ({
      ...prevState,
      datasets: [
        {
          ...prevState.datasets[0],
          backgroundColor: ['rgba(38, 189, 106, 0.75)'],
        },
        {
          ...prevState.datasets[1],
          backgroundColor: ['rgba(221, 80, 105, 0.75)'],
        },
      ],
    }));
  }, [change]);

  function setData(dataObj: DataObj) {
    chart.current?.data.datasets[0].data.push({
      x: Number(dataObj.timestamp),
      y: dataObj.value1,
    });
    chart.current?.data.datasets[1].data.push({
      x: Number(dataObj.timestamp),
      y: dataObj.value2,
    });
    chart.current?.update('quiet');
  }

  function dataSplit(string: string) {
    if (!string) {
      return [];
    }
    const result: number[] = [];
    const stringArr = string.split(' / ');
    stringArr.forEach((el) => {
      let numEl: number;
      if (el.includes('kB')) {
        numEl = parseFloat(el);
      } else {
        numEl = parseFloat(el) / 1000;
      }
      result.push(numEl);
    });
    return result;
  }

  return (
    <div>
      <Line
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
                frameRate: 20,
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
