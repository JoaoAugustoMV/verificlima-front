import { Paper, Box, Typography } from '@mui/material';

export const WhenForecastCard = ({ forecastMadeIn }: {forecastMadeIn: string}) => (
    <Paper className="when-forecast-card" elevation={3} style={{ padding: 16 }}>
      <Box style={{color:"blue"}}>
        <Typography>{forecastMadeIn}</Typography>
  
      </Box>
    </Paper>
  );