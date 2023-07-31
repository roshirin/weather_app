import { WEATHER_ICONS, BACKGROUND_IMAGES, MONTHS } from './constants';

export const getAverageFromArray = (temps) => {
  return Math.round(temps.reduce((acc, temp) => acc + temp) / temps.length);
};

export const getCurrentData = (data) => {
  const {
    dt,
    main: { temp },
    weather: {
      0: { icon },
    },
  } = data;

  const date = new Date(dt * 1000).getDate();
  const temperature = Math.round(temp);
  const iconSrc = WEATHER_ICONS[icon];
  const backgroundSrc = BACKGROUND_IMAGES[icon];

  return { date, temperature, iconSrc, backgroundSrc };
};

export const getBackgroundImage = (backgroundSrc) => {
  return require(`@/img/backgrounds/${backgroundSrc}`);
};

export const getOneDayChartData = (data) => {
  const timezoneOffset = data.city.timezone;

  const stringifyTimestamp = (timestamp) => {
    const localTimestamp = timestamp + timezoneOffset;
    const date = new Date(localTimestamp * 1000);

    let hours = date.getUTCHours();

    if (hours.length === 1) {
      hours = '0' + hours;
    }

    return `${hours}:00`;
  };

  return data.list.map((forecastEntry) => {
    const {
      dt,
      main: { temp },
    } = forecastEntry;
    const time = stringifyTimestamp(dt).slice(0, 5);

    return { time, temperature: Math.round(temp) };
  });
};

export const getFiveDaysChartData = (data) => {
  return data.map((forecastEntry) => {
    const {
      date,
      month,
      dayTemp,
      nightTemp,
    } = forecastEntry;

    return { date, month, dayTemp, nightTemp };
  });
};

export const prepareCardForecastData = (data, today) => {
  let id = 0;
  let nightTemps = [];
  let dayTemps = [];
  let cloudsIds = [];

  return data.list.reduce((acc, timestamp) => {
    const localTimestamp = timestamp.dt + data.city.timezone;
    const dateObj = new Date(localTimestamp * 1000);
    const date = dateObj.getUTCDate();
    const month = dateObj.getUTCMonth();
    const hours = dateObj.getUTCHours();
    const temperature = timestamp.main.temp;
    const clouds = timestamp.clouds.all;

    if (date === today || acc.length >= 4) {
      return acc;
    }

    if (hours < 9) {
      nightTemps.push(temperature);
    } else {
      dayTemps.push(temperature);
    }

    cloudsIds.push(clouds);

    if (dayTemps.length >= 5) {
      acc.push({
        id,
        date: date,
        month: MONTHS[month],
        nightTemp: getAverageFromArray(nightTemps),
        dayTemp: getAverageFromArray(dayTemps),
        clouds: getAverageFromArray(cloudsIds),
      });

      nightTemps = [];
      dayTemps = [];
      cloudsIds = [];
      id++;
    }

    return acc;
  }, []);
};

export const prepareChartData = (chartData, isFiveDaysChart) => {
  if (isFiveDaysChart) {
    const xAxisLabels = chartData.map(entry => `${entry.date} ${entry.month}`);
    const graphDayTemp = chartData.map(entry => entry.dayTemp);
    const graphNightTemp = chartData.map(entry => entry.nightTemp);

    return { xAxisLabels, graphDayTemp, graphNightTemp };
  }

  const xAxisLabels = chartData.map(entry => entry.time);
  const graphTemperature = chartData.map(entry => entry.temperature);

  return { xAxisLabels, graphTemperature };
};

export const loadFavoritesFromStorage = () => {
  const favorites = localStorage.getItem('favorites');
  
  return favorites ? JSON.parse(favorites) : [];
};

export const saveFavoritesToStorage = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getCoordinatesByIp = async () => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  return [latitude, longitude];
};
