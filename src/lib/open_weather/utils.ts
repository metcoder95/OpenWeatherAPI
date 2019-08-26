import { IWeather } from './open_weather';

export const substractWeather = (responseData: any): IWeather => {
  const { weather, sys, main, wind, clouds } = responseData;

  const { main: type, description: type_description } = weather;
  const { sunrise: rawSunrise, sunset: rawSunset } = sys;
  const { temp, temp_min, temp_max, pressure, humidity } = main;
  const { all: clouds_percent } = clouds;
  const { speed: wind_speed } = wind;

  const sunrise = new Date(rawSunrise).toISOString();
  const sunset = new Date(rawSunset).toISOString();

  return {
    type,
    type_description,
    sunrise,
    sunset,
    temp,
    temp_min,
    temp_max,
    pressure,
    humidity,
    clouds_percent,
    wind_speed
  } as IWeather;
};
