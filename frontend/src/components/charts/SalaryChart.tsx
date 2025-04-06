// src/components/charts/SalaryChart.tsx
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Box, Typography } from '@mui/material';
import { SalaryDataItem } from '../../types/data';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface SalaryChartProps {
  data: SalaryDataItem[];
}

export default function SalaryChart({ data }: SalaryChartProps) {
  return (
    <Box sx={{ height: 500 }}>
      <Typography variant="h6" gutterBottom>
        Salary Distribution
      </Typography>
      <Radar
        data={{
          labels: data.map(item => item['Job Category']),
          datasets: [
            {
              label: '20,000 or Below',
              data: data.map(item => parseFloat(item['20000_or_Below'] || '0')),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            },
            {
              label: '20,001-30,000',
              data: data.map(item => parseFloat(item['20001_30000'] || '0')),
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            },
            {
              label: '30,001-50,000',
              data: data.map(item => parseFloat(item['30001_50000'] || '0')),
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1
            }
          ]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { display: true },
              suggestedMin: 0,
              suggestedMax: 100
            }
          }
        }}
      />
    </Box>
  );
}