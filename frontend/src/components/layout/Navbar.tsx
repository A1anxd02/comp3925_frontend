import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #3f51b5, #303f9f)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Hong Kong IT Job Market Analysis
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
