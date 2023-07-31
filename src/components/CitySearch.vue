<template>
  <div class="search-block">
    <input class="search-block__input"
      v-model="searchQuery"
      @input="getAutocomplete"
      @blur="clearAutocomplete"
      :placeholder="$t('cityInputPlaceholder')"
      :class="{ 'transparent-font-color': isLoading }"
    />

    <PreLoader class="search-block__preloader" v-if="isLoading" />
 
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
        {{ city.display_name }}
      </li>
    </ul>
  </div>
</template>

<script> 
  import { debounce } from 'lodash';
  import PreLoader from '@/components/PreLoader.vue';
  import { getAutocompleteCities } from '@/api';
  import i18n from '@/main';

  export default {
    components: {
      PreLoader,
    },

    data() {
      return {
        searchQuery: '',
        cities: [],
        isLoading: false,
      };
    },

    methods: {
      getAutocomplete: debounce(async function() {
        this.isLoading = true;

        const query = this.searchQuery.trim()

        if (query.length >= 3) {
          const lang = i18n.global.t('language');
          const response = await getAutocompleteCities(query, lang);

          this.cities = response;
        } else {
          this.cities = [];
        }

        this.isLoading = false;
      }, 600),

      clearAutocomplete() {
        setTimeout(() => {
          this.cities = [];
        }, 200);
      },

      selectCity(city) {
        const {
          display_place,
          lat,
          lon,
        } = city;

        this.searchQuery = name;
        this.cities = [];
        this.$emit('city-selected', lat, lon, display_place);
      },
    },
  };
</script>

<style lang="scss">
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

      &:disabled {
        color: transparent;
      }
    }
  
    &__autocomplete {
      margin-top: 8px;
    }

    &__preloader {
      position: absolute;
      left: 20px;
      top: -14px;
      max-width: 42px;
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
  
  .transparent-font-color {
    color: transparent;
  }
</style>