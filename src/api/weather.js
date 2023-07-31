const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const userId = 'appid=687e88bf9fce5309e0cb7ce909791969';
const units = 'units=metric';

export const getWeatherForToday = async (lat, lon) => {
  const query = `weather?lat=${lat}&lon=${lon}`;
  
  const data = await fetch(
    `${BASE_URL}${query}&${userId}&${units}`
  )
  .then(response => response.json())
  .catch(error => {
    throw new Error(error);
  });

  return data;
}

export const getWeatherFor5Days = async (lat, lon) => {
  const query = `forecast?lat=${lat}&lon=${lon}`;
  
  const data = await fetch(
    `${BASE_URL}${query}&${userId}&${units}`
  )
  .then(response => response.json())
  .catch(error => {
    throw new Error(error);
  });

  return data;
}
