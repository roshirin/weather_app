<template>
    <div>
      <input
        v-model="searchQuery"
        @input="fetchCities"
        @blur="clearResults"
        placeholder="Enter city name..."
      />
      <ul v-if="cities.length">
        <li v-for="city in cities" :key="city.id" @click="selectCity(city)">
          {{ city.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import debounce from 'lodash.debounce';

  export default {
    data() {
      return {
        searchQuery: '',
        cities: [],
      };
    },
    methods: {
      fetchCitiesDebounced: debounce(function() {
        if (this.searchQuery.length >= 3) {
            fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${this.searchQuery}&limit=5&appid=687e88bf9fce5309e0cb7ce909791969`
            )
            .then((response) => response.json())
            .then((data) => {
                this.cities = data;
            })
            .catch((error) => {
                console.error(error);
            });
        } else {
            this.cities = [];
        }
    }, 500),
      fetchCities() {
        if (this.searchQuery.length >= 3) {
          fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${this.searchQuery}&limit=5&appid=687e88bf9fce5309e0cb7ce909791969`
          )
            .then((response) => response.json())
            .then((data) => {
              this.cities = data;
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          this.cities = [];
        }
      },
      clearResults() {
        setTimeout(() => {
          this.cities = [];
        }, 200);
      },
      selectCity(city) {
        this.searchQuery = city.name;
        this.cities = [];
        this.$emit('city-selected', city.name);
      },
    },
  };
  </script>