import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, Typography } from '@mui/material';
import { previsoesResponse } from '../services/api';
import { PrevisaoDia } from '../models/previsaoDia';
// import axios from 'axios';


function PrevisaoCard({ previsao }: { previsao: PrevisaoDia }){
  return (
    <Paper elevation={3} style={{ padding: 16 }}>
      <Box style={{color:"green"}}>
      {previsao.previsoesFontes.map((previsaoFonte, index) => (
          <Typography>{previsaoFonte.nome} - {previsaoFonte.temperaturaMin} {previsaoFonte.temperaturaMax}</Typography>
            
          ))}        
      </Box>
    </Paper>)
}

const PrevisaoFeitaCard = ({ previsaoFeitaEm }: {previsaoFeitaEm: string}) => (
  <Paper elevation={3} style={{ padding: 16 }}>
    <Box style={{color:"blue"}}>
      <Typography>{previsaoFeitaEm}</Typography>

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

  const previsaoFeitaEm = ['Hoje', '1 dia atrás', '3 dias atrás', '5 dias atrás'];
  const diasPrevistos = previsoesResponse!
  // const diasPrevistos = ['DIA 06/02 - TER(Hoje)', 'DIA 07/02 - QUA(Amanha)', 'DIA 08/02 - QUI'];
  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>Previsão do Tempo</Typography>
      <Grid container spacing={2}>

        {/* Coluna de quando foi feita a previsão */}
        <Grid item xs={3}>
          <Typography variant="h6">Previsão feita:</Typography>
          {previsaoFeitaEm.map((tempo, index) => (
            // <Typography variant="body1" key={index}>{tempo}</Typography>
            <PrevisaoFeitaCard previsaoFeitaEm={tempo} />
          ))}
        </Grid>

          {/* Colunas dos dias Previstos */}
        {diasPrevistos.map((diaPrevisao, indexDia) => (
          <Grid item xs={3} key={indexDia}>
            <Typography variant="h6">{diaPrevisao.feitaEm}</Typography>
            {/* Coluna do dia Previsto */}
            {diaPrevisao.previsoesDia.map((previsaoDia, indexprevisaoFeitaEm) => {
              return (
                <PrevisaoCard
                  key={indexprevisaoFeitaEm}
                  previsao={previsaoDia}
                  
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
