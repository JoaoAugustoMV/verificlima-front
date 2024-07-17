import { ForecastSource } from "./forecastSource";

export class DayForecast {
    dayForecasted: string;
    forecastMadeIn: string;
    forecastSources: ForecastSource[] 
  
    
    constructor(dayForecasted: string, forecastMadeIn: string, forecastSources: ForecastSource[]) {
      this.dayForecasted = dayForecasted
      this.forecastMadeIn = forecastMadeIn
      this.forecastSources = forecastSources
    }
    
  }