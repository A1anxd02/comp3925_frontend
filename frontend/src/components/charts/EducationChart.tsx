// src/components/charts/EducationChart.tsx
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
import { EducationDataItem } from '../../types/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface EducationChartProps {
  data: EducationDataItem[];
}

export default function EducationChart({ data }: EducationChartProps) {
  return (
    <Box sx={{ height: 500 }}>
      <Typography variant="h6" gutterBottom>
        Education Level Distribution
      </Typography>
      <Bar
        data={{
          labels: data.map(item => item['Job Category']),
          datasets: [
            {
              label: 'Secondary or Below',
              data: data.map(item => parseFloat(item['Secondary or Below'] || '0') * 100),
              backgroundColor: 'rgba(255, 99, 132, 0.7)',
            },
            {
              label: 'Diploma/Certificate',
              data: data.map(item => parseFloat(item['Diploma / Certificate'] || '0') * 100),
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
            },
            {
              label: 'Sub-degree',
              data: data.map(item => parseFloat(item['Sub-degree'] || '0') * 100),
              backgroundColor: 'rgba(255, 206, 86, 0.7)',
            },
            {
              label: 'First Degree',
              data: data.map(item => parseFloat(item['First Degree'] || '0') * 100),
              backgroundColor: 'rgba(75, 192, 192, 0.7)',
            },
            {
              label: 'Postgraduate',
              data: data.map(item => parseFloat(item['Postgraduate Degree'] || '0') * 100),
              backgroundColor: 'rgba(153, 102, 255, 0.7)',
            }
          ]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: { display: true, text: 'Percentage (%)' }
            }
          }
        }}
      />
    </Box>
  );
}