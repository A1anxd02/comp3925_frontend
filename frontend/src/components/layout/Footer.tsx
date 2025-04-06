// Footer.tsx
import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" py={3} textAlign="center">
      <Typography variant="body2">
        © {new Date().getFullYear()} IT Job Market Analysis
      </Typography>
    </Box>
  )
}