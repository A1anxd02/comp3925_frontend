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
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#303f9f' }}>
        Experience Requirements
      </Typography>
      <Bar
        data={{
          labels: data.map(item => item['Job Category']),
          datasets: [
            {
              label: 'No Experience',
              data: data.map(item => parseFloat(item['Less than 1 Year or No experience is required'] || '0') * 100),
              backgroundColor: 'rgba(255, 99, 132, 0.6)', // Adjusted opacity for better blending
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255, 99, 132, 1)'
            },
            {
              label: '1-3 Years',
              data: data.map(item => parseFloat(item['1 Year to less than 3 Years'] || '0') * 100),
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(54, 162, 235, 1)'
            },
            {
              label: '3-6 Years',
              data: data.map(item => parseFloat(item['3 Years to less than 6 Years'] || '0') * 100),
              backgroundColor: 'rgba(255, 206, 86, 0.6)',
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255, 206, 86, 1)'
            },
            {
              label: '6-10 Years',
              data: data.map(item => parseFloat(item['6 Years to less than 10 Years'] || '0') * 100),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: '10+ Years',
              data: data.map(item => parseFloat(item['10 Years or above'] || '0') * 100),
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(153, 102, 255, 1)'
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
            x: {
              stacked: true,
              grid: {
                display: false, // Hide the x-axis grid lines
              }
            },
            y: { 
              stacked: true,
              max: 100,
              title: { display: true, text: 'Percentage (%)' },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)', // Light grid lines for better visual separation
              }
            }
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 20,
              bottom: 20
            }
          }
        }}
      />
    </Box>
  );
}
