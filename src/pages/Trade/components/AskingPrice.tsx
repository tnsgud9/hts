import React from 'react';
import { Box, TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206,86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54,162,235,1)',
        'rgba(255,206,86,1)',
        'rgba(75,192,192,1)',
        'rgba(153,102,255,1)',
        'rgba(255,159,64,1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
  },
};
type DataSetType = {
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
};

type DataType = {
  labels: string[];
  datasets: DataSetType[];
};

type RowType = {
  price: number;
  percent: number;
  dataSet: DataType;
};

const increaseAskingPrices: RowType[] = [
  {
    price: 1000,
    percent: 50,
    dataSet: {
      labels: ['label1'],
      datasets: [
        {
          data: [50],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 1000,
    percent: 50,
    dataSet: {
      labels: ['label1'],
      datasets: [
        {
          data: [50],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 1000,
    percent: 50,
    dataSet: {
      labels: ['label1'],
      datasets: [
        {
          data: [50],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 1000,
    percent: 50,
    dataSet: {
      labels: ['label1'],
      datasets: [
        {
          data: [50],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1,
        },
      ],
    },
  },
];

const increaseOption = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      min: 0,
      max: 30,
      ticks: { display: false, stepsize: 5 },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: { display: false },
    },
  },
};
const decreaseAskingPrices: RowType[] = [
  {
    price: 1000,
    percent: 50,
    dataSet: {
      labels: ['label1'],
      datasets: [
        {
          data: [50],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 1000,
    percent: 50,
    dataSet: {
      labels: ['label1'],
      datasets: [
        {
          data: [50],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 1000,
    percent: 50,
    dataSet: {
      labels: ['label1'],
      datasets: [
        {
          data: [50],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    price: 1000,
    percent: 50,
    dataSet: {
      labels: ['label1'],
      datasets: [
        {
          data: [50],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1,
        },
      ],
    },
  },
];

const decreaseOption = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      min: 0,
      max: 30,
      ticks: { display: false, stepsize: 5 },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: { display: false },
    },
  },
};

const AskingPrice = () => {
  return (
    <Box>
      <TableContainer>
        <Table size="small">
          <TableHead></TableHead>
          <TableBody>
            {increaseAskingPrices.map((row) => {
              return (
                <TableRow key={row.price}>
                  <TableCell>
                    <Box width="50px" height="20px">
                      <Bar type="" data={row.dataSet} options={increaseOption} />
                    </Box>
                  </TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.percent}%</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              );
            })}
            {decreaseAskingPrices.map((row) => {
              return (
                <TableRow key={row.price}>
                  <TableCell></TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.percent}%</TableCell>
                  <TableCell>
                    <Box width="50px" height="20px">
                      <Bar type="" data={row.dataSet} options={decreaseOption} />
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AskingPrice;
