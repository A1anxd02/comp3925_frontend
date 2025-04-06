// src/components/charts/ExperienceChart.tsx
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Box, Typography } from '@mui/material';
import { ExperienceDataItem } from '../../types/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ExperienceChartProps {
  data: ExperienceDataItem[];
}

export default function ExperienceChart({ data }: ExperienceChartProps) {
  return (
    <Box sx={{ height: 500 }}>
      <Typography variant="h6" gutterBottom>
        Experience Requirements
      </Typography>
      <Bar
        data={{
          labels: data.map(item => item['Job Category']),
          datasets: [
            {
              label: 'No Experience',
              data: data.map(item => parseFloat(item['Less than 1 Year or No experience is required'] || '0') * 100),
              backgroundColor: 'rgba(255, 99, 132, 0.7)',
            },
            {
              label: '1-3 Years',
              data: data.map(item => parseFloat(item['1 Year to less than 3 Years'] || '0') * 100),
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
            },
            {
              label: '3-6 Years',
              data: data.map(item => parseFloat(item['3 Years to less than 6 Years'] || '0') * 100),
              backgroundColor: 'rgba(255, 206, 86, 0.7)',
            },
            {
              label: '6-10 Years',
              data: data.map(item => parseFloat(item['6 Years to less than 10 Years'] || '0') * 100),
              backgroundColor: 'rgba(75, 192, 192, 0.7)',
            },
            {
              label: '10+ Years',
              data: data.map(item => parseFloat(item['10 Years or above'] || '0') * 100),
              backgroundColor: 'rgba(153, 102, 255, 0.7)',
            }
          ]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { stacked: true },
            y: { 
              stacked: true,
              max: 100,
              title: { display: true, text: 'Percentage (%)' }
            }
          }
        }}
      />
    </Box>
  );
}