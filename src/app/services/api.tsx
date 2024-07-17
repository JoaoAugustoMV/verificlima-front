import { DayForecast } from "../models/dayForecast";
import { ForecastSource } from "../models/forecastSource";
import { ForecastPayload } from "../models/forecastPayload";

const previsoesHoje: DayForecast[] = [
    new DayForecast(
        'DIA 06/02 - TER(Hoje)',
        'Hoje',
        [
          new ForecastSource('Fonte1', 'https://fonte1.com', 15, 25),
          new ForecastSource('Fonte2', 'https://fonte2.com', 14, 24),
        ]
      ),
      new DayForecast(
        'DIA 06/02 - TER(Hoje)',
        '1 dia atrás',
        [
          new ForecastSource('Fonte1', 'https://fonte1.com', 13, 23),
          new ForecastSource('Fonte2', 'https://fonte2.com', 12, 22),
        ]
      ),
      new DayForecast(
        'DIA 06/02 - TER(Hoje)',
        '3 dia atrás',
        [
          new ForecastSource('Fonte1', 'https://fonte1.com', 13, 23),
          new ForecastSource('Fonte2', 'https://fonte2.com', 12, 22),
        ]
      ),
      new DayForecast(
        'DIA 06/02 - TER(Hoje)',
        '5 dia atrás',
        [
          new ForecastSource('Fonte1', 'https://fonte1.com', 13, 23),
          new ForecastSource('Fonte2', 'https://fonte2.com', 12, 22),
        ]
      )
]
const previsoesAmanha: DayForecast[] = [
    new DayForecast(
        'DIA 07/02 - QUA(Amanhã)',
        'Hoje',
        [
          new ForecastSource('Fonte1', 'https://fonte1.com', 16, 26),
          new ForecastSource('Fonte2', 'https://fonte2.com', 15, 25),
        ]
      ),
      new DayForecast(
        'DIA 07/02 - QUA(Amanhã)',
        '1 dia atrás',
        [
          new ForecastSource('Fonte1', 'https://fonte1.com', 14, 24),
          new ForecastSource('Fonte2', 'https://fonte2.com', 13, 23),
        ]
      ),
      new DayForecast(
        'DIA 07/02 - QUA(Amanhã)',
        '3 dia atrás',
        [
          new ForecastSource('Fonte1', 'https://fonte1.com', 14, 24),
          new ForecastSource('Fonte2', 'https://fonte2.com', 13, 23),
        ]
      ),
      new DayForecast(
        'DIA 07/02 - QUA(Amanhã)',
        '3 dia atrás',
        [
          new ForecastSource('Fonte1', 'https://fonte1.com', 14, 24),
          new ForecastSource('Fonte2', 'https://fonte2.com', 13, 23),
        ]
      ),
]

const previsoesQuinta: DayForecast[] = [
    new DayForecast(
        'DIA 08/02 - QUI',
        'Hoje',
        [
          new ForecastSource('Fonte1', 'https://fonte1.com', 17, 27),
          new ForecastSource('Fonte2', 'https://fonte2.com', 16, 26),
        ]
      ),
      new DayForecast(
        'DIA 08/02 - QUI',
        '1 dia atrás',
        [
          new ForecastSource('Fonte1', 'https://fonte1.com', 15, 25),
          new ForecastSource('Fonte2', 'https://fonte2.com', 14, 24),
        ]
      ),
      new DayForecast(
        'DIA 08/02 - QUI',
        '3 dia atrás',
        [
          new ForecastSource('Fonte1', 'https://fonte1.com', 15, 25),
          new ForecastSource('Fonte2', 'https://fonte2.com', 14, 24),
        ]
      ),
      new DayForecast(
        'DIA 08/02 - QUI',
        '5 dia atrás',
        [
          new ForecastSource('Fonte1', 'https://fonte1.com', 15, 25),
          new ForecastSource('Fonte2', 'https://fonte2.com', 14, 24),
        ]
      ),
] 


export const previsoesResponse = [
    new ForecastPayload('Hoje', previsoesHoje), 
    new ForecastPayload('Amanha', previsoesAmanha), 
    new ForecastPayload('Quinta', previsoesQuinta)]
