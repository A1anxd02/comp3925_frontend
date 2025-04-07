import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" sx={{
      width: '100%', py: 4, textAlign: 'center',
      background: 'linear-gradient(45deg, #303f9f, #6a1b9a)', 
      color: 'white', 
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.2)'
    }}>
      <Typography variant="body2" sx={{ fontWeight: '500' }}>
        © {new Date().getFullYear()} IT Job Market Analysis
      </Typography>
    </Box>
  );
}
