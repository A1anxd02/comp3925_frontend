import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

// Layout.tsx
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
          p: 4, 
          width: '100%',
          mx: 'auto'
        }}>
          {children}
        </Box>

        <Footer />
      </Box>
    );
  }

