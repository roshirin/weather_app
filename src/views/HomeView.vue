<template>
  <div class="home">
    <CitySearch @city-selected="getWeather" />
    <div v-if="weather">
      <h2>Weather for {{ selectedCity }}</h2>
      <p>Temperature: {{ Math.round(weather.main.temp) }}°C</p>
      <p>Description: {{ weather.weather[0].description }}</p>
    </div>
  </div>
</template>

<script>
import CitySearch from '../components/CitySearch.vue';

export default {
  // ... other options ...
  data() {
      return {
        selectedCity: '', // Initialize the selectedCity property to an empty string
        weather: null, // Initialize the weather property to null
      };
    },
  methods: {
    getWeather(city) {
      this.selectedCity = city;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=687e88bf9fce5309e0cb7ce909791969&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.weather = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  components: {
    CitySearch,
  },
};
</script>
