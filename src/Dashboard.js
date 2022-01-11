import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function LineChart(props) {
  //alert(randomIntFromInterval(1, 10));
  //const [numberOfBirds, setNumberOfBirds] = useState(0);
  const temp = [];
  for (var i = 0; i < 10; i++) {
    temp.push(randomIntFromInterval(1, 30));
  }
  temp[5] = props.nob;
  const data = {
    labels: ['', '', '', '', '', '', '', '', '', ''],

    datasets: [
      {
        data: temp,
        borderColor: ['rgb(255,105,180)'],
        backgroundColor: ['rgba(255, 206, 86, 0.2)'],
        pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
        pointBorderColor: 'rgba(255, 206, 86, 0.2)',
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Line Chart',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };
  <p>{props.data} </p>;

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}

export default LineChart;
