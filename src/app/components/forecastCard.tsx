import { Paper, Box, Typography } from '@mui/material';
import { DayForecast } from '../models/dayForecast';

export function ForecastCard({ dayForecast }: { dayForecast: DayForecast }){
    return (
      <Paper elevation={3} style={{ padding: 16 }}>
        <Box style={{color:"green"}}>
        {dayForecast.forecastSources.map((forecastSource, index) => (
            <Typography>{forecastSource.name} - {forecastSource.minTemperature} {forecastSource.maxTemperature}</Typography>
              
            ))}        
        </Box>
      </Paper>)
  }