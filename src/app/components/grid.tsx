import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, Typography } from '@mui/material';
import { previsoesResponse } from '../services/api';
import { DayForecast } from '../models/dayForecast';
import { WhenForecastCard } from './whenForecastCard';
import { ForecastCard } from './forecastCard';
// import axios from 'axios';


const AppGrid = () => {
  
  // useEffect(() => {
  //   setPrevisoes(previsoesMock);
  //   const fetchData = async () => {
  //     try {
  //       // const response = await axios.get('URL_DA_SUA_API');
  //       // const response: React.SetStateAction<never[]> = []
  //     } catch (error) {
  //       console.error('Erro ao buscar dados', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const whenForecastMade = ['Hoje', '1 dia atrás', '3 dias atrás', '5 dias atrás'];
  const forecastsResp = previsoesResponse!
  // const diasPrevistos = ['DIA 06/02 - TER(Hoje)', 'DIA 07/02 - QUA(Amanha)', 'DIA 08/02 - QUI'];
  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>Previsão do Tempo</Typography>
      <Grid className="container" container spacing={2}>

        {/* Coluna de quando foi feita a previsão */}
        <Grid className="gridWhen" item xs={3}>
          <Typography variant="h6">Previsão feita:</Typography>
          {whenForecastMade.map((tempo, index) => (
            // <Typography variant="body1" key={index}>{tempo}</Typography>
            <WhenForecastCard forecastMadeIn={tempo} />
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
