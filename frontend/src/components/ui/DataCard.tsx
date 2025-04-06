import { Paper, Typography } from '@mui/material';

interface DataCardProps {
  title: string;
  children: React.ReactNode;
}

export default function DataCard({ title, children }: DataCardProps) {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
}