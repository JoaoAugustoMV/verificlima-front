import { Paper, Box, Typography } from '@mui/material';
import { DayForecast } from '../models/dayForecast';

export function ForecastCard({ dayForecast }: { dayForecast: DayForecast }){
    return (
      <Paper className="forecast-card" elevation={3} style={{ padding: 16 }}>
        <Box className="forecast-box" style={{color:"green"}}>
        {dayForecast.forecastSources.map((forecastSource, index) => (
            <Typography><a target="_blank"href={forecastSource.urlSite}>{forecastSource.name}</a> - {forecastSource.minTemperature}°C a {forecastSource.maxTemperature}°C</Typography>
              
            ))}        
        </Box>
      </Paper>)
  }