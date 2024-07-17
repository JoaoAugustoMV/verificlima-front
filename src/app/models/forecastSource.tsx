export class ForecastSource{
    name: string;
    urlSite: string; 
    minTemperature: number;
    maxTemperature: number;
    // fonte: Fonte
  
    constructor(name: string, urlSite: string, minTemperature: number, temperaturaMax: number){
      this.name = name;
      this.urlSite = urlSite;
      this.minTemperature = minTemperature
      this.maxTemperature = temperaturaMax
    } 
  }