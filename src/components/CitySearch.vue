<template>
    <div>
      <input
        v-model="searchQuery"
        @input="fetchCitiesDebounced"
        @blur="clearResults"
        placeholder="Enter city name..."
      />
      <ul v-if="cities.length">
        <li v-for="city in cities" :key="city.id" @click="selectCity(city)">
          {{ city.name }}, {{ city.adminName1 }}, {{ city.countryCode }}
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
            `http://api.geonames.org/searchJSON?name_startsWith=${this.searchQuery}&cities=cities1000&maxRows=5&username=geocityfinder`
          )
          .then((response) => response.json())
          .then((data) => {
              this.cities = data.geonames;
              console.log(data);
          })
          .catch((error) => {
              console.error(error);
          });
        } else {
            this.cities = [];
        }
      }, 600),
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