<template>
  <div 
    class="weather-block"
    :style="{ 'background-image': cardData && `url(${backgroundImage})` }"
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
        try {
          if ('geolocation' in navigator) {
            const coordinates = await getCoordinatesByIp();

            this.getWeatherData(coordinates[0], coordinates[1]);
          }
        } catch (error) {
          console.error('Error fetching user coordinates or weather data:', error);
        }
      },

      handleExtraFavorite(cityName) {
        this.$emit('extraFavoriteAdded', cityName);
      },
    },
  };
</script>

<style lang="scss">
  .weather-block {
    min-height: 260px;
    padding: 20px 0 60px;

    background-image: url('../img/backgrounds/default-sky.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: $color-white;

    @include onTablet {
      padding: 30px;
    }

    @include onDesktop {  
      border-radius: 50px;
    }

    &__header {
      display: flex;
      padding: 0 20px;
      flex-wrap: wrap-reverse;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      @include onTablet {
        padding: 0;
      }
    } 

    &__buttons {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      @include onTablet {
        gap: 30px;
        width: auto;
      }

      @include onDesktop {
        gap: 40px;
      }
    }

    &__city {
      flex: 1 1 auto;
    }

    &__content {
      margin-top: 20px;

      @include onTablet {
        margin-top: 30px;
      }

      &__preloader {
        left: 30px;
        top: 10px;
        max-width: 50px;
      }
    }
  }

  .weather-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px 0 0;

    background-color: $color-back-blue;

    @include onTablet {
      padding: 30px;
      border-radius: 30px;
    }

    @include onDesktop {
      flex-direction: row;
      gap: 40px;

      &__item {
        flex-basis: 50%;
      }
    }
  }

  .switcher-container {
    flex-grow: 1;
  }
</style>
