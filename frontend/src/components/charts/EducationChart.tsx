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
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#303f9f' }}>
        Education Level Distribution
      </Typography>
      <Bar
        data={{
          labels: data.map(item => item['Job Category']),
          datasets: [
            {
              label: 'Secondary or Below',
              data: data.map(item => parseFloat(item['Secondary or Below'] || '0') * 100),
              backgroundColor: 'rgba(255, 99, 132, 0.6)', // Soften background for blending
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255, 99, 132, 1)'
            },
            {
              label: 'Diploma/Certificate',
              data: data.map(item => parseFloat(item['Diploma / Certificate'] || '0') * 100),
              backgroundColor: 'rgba(54, 162, 235, 0.6)', // Softened opacity
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(54, 162, 235, 1)'
            },
            {
              label: 'Sub-degree',
              data: data.map(item => parseFloat(item['Sub-degree'] || '0') * 100),
              backgroundColor: 'rgba(255, 206, 86, 0.6)', // Softened opacity
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255, 206, 86, 1)'
            },
            {
              label: 'First Degree',
              data: data.map(item => parseFloat(item['First Degree'] || '0') * 100),
              backgroundColor: 'rgba(75, 192, 192, 0.6)', // Softened opacity
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Postgraduate',
              data: data.map(item => parseFloat(item['Postgraduate Degree'] || '0') * 100),
              backgroundColor: 'rgba(153, 102, 255, 0.6)', // Softened opacity
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
            legend: { 
              position: 'top',
              labels: {
                font: {
                  size: 14,
                  weight: 'bold'
                },
                color: '#303f9f' // Color consistency for the legend
              }
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: { 
                display: true, 
                text: 'Percentage (%)',
                color: '#303f9f', // Consistent color for axis labels
                font: {
                  size: 14,
                  weight: 'bold'
                }
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)', 
                lineWidth: 0.5 
              }
            },
            x: {
              grid: {
                display: false, 
              }
            }
          },
        }}
      />
    </Box>
  );
}
