import { Paper, Typography } from '@mui/material';

interface DataCardProps {
  title: string;
  children: React.ReactNode;
}

export default function DataCard({ title, children }: DataCardProps) {
  return (
    <Paper elevation={3} sx={{
        p: 3, mb: 4, borderRadius: 2, 
        backgroundColor: '#f5f5f5', 
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        '&:hover': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }
      }}>
      
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
}