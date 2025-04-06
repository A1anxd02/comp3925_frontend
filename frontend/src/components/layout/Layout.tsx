import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar />
      <Box component="main" sx={{ 
        flexGrow: 1,
        p: 3,
        maxWidth: 1200,
        mx: 'auto',
        width: '100%'
      }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}