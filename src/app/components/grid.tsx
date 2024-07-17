import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, Typography } from '@mui/material';
import { previsoesResponse } from '../services/api';
import { DayForecast } from '../models/dayForecast';
// import axios from 'axios';


function ForecastCard({ dayForecast }: { dayForecast: DayForecast }){
  return (
    <Paper elevation={3} style={{ padding: 16 }}>
      <Box style={{color:"green"}}>
      {dayForecast.forecastSources.map((forecastSource, index) => (
          <Typography>{forecastSource.name} - {forecastSource.minTemperature} {forecastSource.maxTemperature}</Typography>
            
          ))}        
      </Box>
    </Paper>)
}

const PrevisaoFeitaCard = ({ forecastMadeIn }: {forecastMadeIn: string}) => (
  <Paper elevation={3} style={{ padding: 16 }}>
    <Box style={{color:"blue"}}>
      <Typography>{forecastMadeIn}</Typography>

    </Box>
  </Paper>
);


// const previsaoFeitaEm = ['Hoje', '1 dia atrás', '3 dias atrás', '5 dias atrás'];
// const diasPrevistos = ['DIA 06/02 - TER(Hoje)', 'DIA 07/02 - QUA(Amanha)', 'DIA 08/02 - QUI'];


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
      <Grid container spacing={2}>

        {/* Coluna de quando foi feita a previsão */}
        <Grid item xs={3}>
          <Typography variant="h6">Previsão feita:</Typography>
          {whenForecastMade.map((tempo, index) => (
            // <Typography variant="body1" key={index}>{tempo}</Typography>
            <PrevisaoFeitaCard forecastMadeIn={tempo} />
          ))}
        </Grid>

          {/* Colunas dos dias Previstos */}
        {forecastsResp.map((dayForecastPayload, indexDia) => (
          <Grid item xs={3} key={indexDia}>
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
    </Box>
  );
};

export default AppGrid;
