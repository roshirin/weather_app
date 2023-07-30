<template>
  <div class="search-block">
    <input class="search-block__input"
      v-model="searchQuery"
      @input="getAutocomplete"
      @blur="clearAutocomplete"
      placeholder="Enter city name..."
    />

    <ul 
      v-if="cities.length" 
      class="search-block__autocomplete autocomplete-variants"
    >
      <li 
        v-for="city in cities" 
        :key="city.id" 
        @click="selectCity(city)"
        class="autocomplete-variants__element"
      >
        {{ city.name }}, {{ city.adminName1 }}, {{ city.countryCode }}
      </li>
    </ul>
  </div>
</template>

<script> 
  import { debounce } from 'lodash';
  import { getAutocompleteCities } from '@/api';

  export default {
    data() {
      return {
        searchQuery: '',
        cities: [],
      };
    },
    methods: {
      getAutocomplete: debounce(async function() {
        const query = this.searchQuery.trim()

        if (query.length >= 3) {
          const response = await getAutocompleteCities(query);

          this.cities = response.geonames;
        } else {
          this.cities = [];
        }
      }, 600),
      clearAutocomplete() {
        setTimeout(() => {
          this.cities = [];
        }, 200);
      },
      selectCity(city) {
        const {
          name,
          lat,
          lng: lon,
        } = city;

        this.searchQuery = name;
        this.cities = [];
        this.$emit('city-selected', lat, lon, name);
      },
    },
  };
</script>

<style lang="scss">
  @import '../styles/utils/vars';

  .search-block {
    position: relative;

    &__input {
      height: 50px;
      width: 100%;
      max-width: 520px;
      box-sizing: border-box;

      padding: 0 20px;
      background-color: $color-light-grey;
      border: none;
      border-radius: 20px 0 20px;

      font-size: 24px;

      &:focus-visible {
        outline: 1px solid $color-dark-grey;
      }
    }
    &__autocomplete {
      margin-top: 8px;
    }
  }

  .autocomplete-variants {
    position: absolute;
    min-width: 260px;
    padding: 10px 0;
    list-style: none;
    background-color: $color-white;
    border-radius: 10px;
    font-size: 20px;

    &__element {
      padding: 5px 20px;
      cursor: pointer;

      &:hover {
        background-color: $color-light-grey;
      }
    }
  }
</style>