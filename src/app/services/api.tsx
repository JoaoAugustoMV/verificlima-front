import { DayForecast } from "../models/dayForecast";
import { ForecastSource } from "../models/forecastSource";
import { ForecastPayload } from "../models/forecastPayload";
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

const instance = axios.create({  
  baseURL: process.env.NEXT_PUBLIC_URL_BASE_BACK  
});

instance.interceptors.response.use((request: AxiosResponse) => {
  if (request.data){
    request.data = camelizeKeys(request.data);
  }
  
  return request;
})

export const API = {
  getWeekInfo: (): Promise<ForecastPayload[]> => instance.get("bff/get_current_week").then((response => response.data)),
}
