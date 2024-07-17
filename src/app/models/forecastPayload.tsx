import { DayForecast } from "./dayForecast"

export class ForecastPayload{
    madeIn: string
    daysForecasts: DayForecast[]

    constructor(feitaEm: string, previsoesDia: DayForecast[]){
        this.madeIn = feitaEm
        this.daysForecasts = previsoesDia
    }
}