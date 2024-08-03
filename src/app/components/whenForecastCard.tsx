import { Paper, Box, Typography } from '@mui/material';

export const WhenForecastCard = ({ forecastMadeIn }: {forecastMadeIn: string}) => (
    <Paper className="when-forecast-card" elevation={3} style={{ padding: 10 }}>
      <Box className="when-forecast-box" style={{color:"blue"}}>
        <Typography>{forecastMadeIn}</Typography>
  
      </Box>
    </Paper>
  );