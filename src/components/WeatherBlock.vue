<template>
  <div 
    class="weather-block"
    :style="{ 'background-image': backgroundImage && `url(${backgroundImage})` }"
  >
    <div class="weather-block__header">
      <CitySearch
        v-if="!favoritedEntry"
        @city-selected="getWeatherData" 
        class="weather-block__city" 
      />

      <div class="weather-block__buttons">
        <div class="switcher-container">
          <FiveDaysSwitcher
            :isFiveDaysChart="isFiveDaysChart"
            @toggle="toggleFiveDaysChart"
          />
        </div>

        <FavoritesButton 
          v-if="cardData"
          :selectedCity="selectedCity"
          :coordinates="coordinates"
          @extraFavoriteAdded="handleExtraFavorite"
        />

        <RemoveWeatherBlockButton
          v-if="!favoritedEntry"
          @click="removeWeatherBlock"
        />
      </div>
    </div>

    <div class="weather-block__content weather-info" v-if="cardData || isLoading">
      <PreLoader 
        v-if="isLoading"
        class="weather-block__preloader"
      />

      <WeatherCard
        v-if="cardData && !isLoading"
        :selectedCity="selectedCity"
        :cardData="cardData"
        class="weather-info__item"
      />

      <WeatherChart
        v-if="cardData"
        :chartData="chartData"
        :isFiveDaysChart="isFiveDaysChart"
        class="weather-info__item"
      />
    </div>
  </div>
</template>

<script>
  import CitySearch from '@/components/CitySearch.vue';
  import WeatherCard from '@/components/WeatherCard.vue';
  import WeatherChart from '@/components/WeatherChart.vue';
  import RemoveWeatherBlockButton from '@/components/RemoveWeatherBlockButton.vue';
  import FiveDaysSwitcher from '@/components/FiveDaysSwitcher.vue';
  import FavoritesButton from '@/components/FavoritesButton.vue';
  import PreLoader from '@/components/PreLoader.vue';
  import { getWeatherForToday, getWeatherFor5Days } from '@/api';
  import {
    getCurrentData,
    getOneDayChartData,
    getFiveDaysChartData,
    prepareCardForecastData,
    getBackgroundImage,
    getCoordinatesByIp,
  } from '@/helpers';

  export default {
    components: {
      CitySearch,
      WeatherCard,
      WeatherChart,
      FiveDaysSwitcher,
      FavoritesButton,
      RemoveWeatherBlockButton,
      PreLoader,
    },
    
    props: {
      favoritedEntry: Object,
      isFirstBlock: Boolean,
    },

    data() {
      return {
        backgroundImage: 'none',
        isLoading: false,
        selectedCity: '',
        coordinates: [],
        isFiveDaysChart: false,
        currentData: null,
        forecastData: null,
        cardData: null,
        chartData: null,
      };
    },

    mounted() {
      if (!this.favoritedEntry && !this.isFirstBlock) {
        this.backgroundImage = getBackgroundImage('few-clouds.jpg');
      }
      
      if (this.isFirstBlock) {
        this.loadDataForFirstBlock();
      }

      if (this.favoritedEntry) {
        this.loadDataForFavorite();
      }
    },

    watch: {
      cardData: {
        handler(newData) {
          this.backgroundImage = getBackgroundImage(newData[0].backgroundSrc);
        }
      }
    },

    methods: {
      removeWeatherBlock() {
        this.$emit('removeBlock');
      },

      toggleFiveDaysChart(isFiveDays) {
        this.isFiveDaysChart = isFiveDays;
        if (this.currentData) {
          this.updateDisplayedData(isFiveDays);
        }
      },
          
      updateDisplayedData(isFiveDays) {
        const current = this.currentData;
        const forecast = this.forecastData;
        const todaysWeather = getCurrentData(current);

        if (isFiveDays) {
          const next4Days = prepareCardForecastData(forecast, todaysWeather.date);

          this.cardData = [todaysWeather, next4Days];
          this.chartData = getFiveDaysChartData(next4Days);

          return;
        }

        this.cardData = [todaysWeather];
        this.chartData = getOneDayChartData(forecast).slice(0, 8);
      },

      getWeatherData: async function (lat, lon, cityName) {
        this.isLoading = true;
        const [currentData, forecastData] = await Promise.all([
          getWeatherForToday(lat, lon),
          getWeatherFor5Days(lat, lon),
        ]);

        this.selectedCity = cityName ? cityName : currentData.name;
        this.coordinates= [lat, lon];
        this.currentData = currentData;
        this.forecastData = forecastData;

        this.updateDisplayedData(this.isFiveDaysChart);
        this.isLoading = false;
      },

      loadDataForFavorite() {
        const {
          cityName,
          coordinates,
        } = this.favoritedEntry;

        this.getWeatherData(coordinates[0], coordinates[1], cityName);
      },

      async loadDataForFirstBlock() {
        this.isLoading = true;

        try {
          if ('geolocation' in navigator) {
            const coordinates = await getCoordinatesByIp();

            this.getWeatherData(coordinates[0], coordinates[1]);
          }
        } catch (error) {
          console.error('Error fetching user coordinates or weather data:', error);
  
          this.isLoading = false;
        }
      },

      handleExtraFavorite(cityName) {
        this.$emit('extraFavoriteAdded', cityName);
      },
    },
  };
</script>

<style lang="scss">
  @import '../styles/weather-block.scss';
</style>
