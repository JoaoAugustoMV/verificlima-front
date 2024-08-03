import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, Typography } from '@mui/material';
import { API } from '../services/api';
import { WhenForecastCard } from './whenForecastCard';
import { ForecastCard } from './forecastCard';
import { ForecastPayload } from '../models/forecastPayload';


const AppGrid = () => {

  const [forecastsResp, setForecastsResp] = useState<ForecastPayload[]>([]);
  const [count, setCount] = useState(0);
  const whenForecastMade = ['Hoje', '1 dia atrás', '3 dias atrás', '5 dias atrás'];  

  useEffect(() => {
    
      API.getWeekInfo().then(
        (data) => {
          setCount(count+1);          
          
          setForecastsResp(data);
        })
        .catch((err) => {
          console.log(err);        
        });
      }
      , []);
    
  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>Previsão do Tempo</Typography>
      <Grid className="container" container spacing={2}>

        {/* Coluna de quando foi feita a previsão */}
        <Grid className="gridWhen" item xs={3}>
          <Typography variant="h6">Previsão feita:</Typography>
          {whenForecastMade.map((tempo, index) => (            
            <WhenForecastCard forecastMadeIn={tempo} key={index}/>
          ))}
        </Grid>

        <Grid className='gridDaysForecasts'>
          {/* Colunas dos dias Previstos */}
        {forecastsResp.map((dayForecastPayload, indexDia) => (
          <Grid className="gridNameDay" item xs={3} key={indexDia}>
            <Typography variant="h6">{dayForecastPayload.madeIn}</Typography>
            {/* Coluna do dia Previsto */}
            {dayForecastPayload.daysForecasts.map((dayForecast, indexDayForecast) => {
              return (
                <ForecastCard
                  key={indexDayForecast}
                  dayForecast={dayForecast}
                  
                />
              );
           
            })}
          </Grid>
        ))}
      </Grid>
      </Grid>
    </Box>
  );
};

export default AppGrid;
