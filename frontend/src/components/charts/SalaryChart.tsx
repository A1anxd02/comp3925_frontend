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
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#303f9f' }}>
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
              borderWidth: 1,
              pointRadius: 6,  
              pointStyle: 'circle', // Circular points
            },
            {
              label: '20,001-30,000',
              data: data.map(item => parseFloat(item['20001_30000'] || '0')),
              backgroundColor: 'rgba(54, 162, 235, 0.2)', // Softened background color
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              pointRadius: 6,
              pointStyle: 'circle',
            },
            {
              label: '30,001-50,000',
              data: data.map(item => parseFloat(item['30001_50000'] || '0')),
              backgroundColor: 'rgba(255, 206, 86, 0.2)', // Softened background color
              borderColor: 'rgba(255, 206, 86, 1)',
              borderWidth: 1,
              pointRadius: 6,
              pointStyle: 'circle',
            },
            {
                label: '50,001-90,000',
                data: data.map(item => parseFloat(item['50001_90000'] || '0')),
                backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                pointRadius: 6,
                pointStyle: 'circle',
              },
              {
                label: '90,000 - or More',
                data: data.map(item => parseFloat(item['90001_or_More'] || '0')),
                backgroundColor: 'rgba(148, 0, 211, 0.2)', 
                borderColor: 'rgba(148, 0, 211, 1)',      
                borderWidth: 2,                           
                pointRadius: 7,                           
                pointStyle: 'circle',
              }
          ]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { display: true, color: 'rgba(0, 0, 0, 0.1)' }, // Lighter angle lines for a subtle effect
              suggestedMin: 0,
              suggestedMax: 100,
              grid: {
                color: 'rgba(0, 0, 0, 0.1)', // Light grid lines
                lineWidth: 0.5, // Thin grid lines for a cleaner look
              },
              pointLabels: {
                font: { size: 14, weight: 'bold' }, // font size and weight for better readability
                color: '#303f9f' // Set point label color for consistency
              }
            }
          },
          plugins: {
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)', 
              titleColor: '#fff', 
              bodyColor: '#fff', // White body text
              padding: 10, 
            },
            legend: {
              labels: {
                font: {
                  size: 14,
                  weight: 'bold',
                },
                color: '#303f9f', // Legend label color
              }
            }
          }
        }}
      />
    </Box>
  );
}
