<template>
  <div class="favorites">
    <div class="weather-blocks-container">
      <div v-for="favEntry in favorites" :key="favEntry.cityName">
        <WeatherBlock :favoritedEntry="favEntry" />
      </div>
    </div>
  </div>
</template>

<script>
  import WeatherBlock from '@/components/WeatherBlock.vue';
  import { loadFavoritesFromStorage } from '@/helpers';

  export default {
    components: {
      WeatherBlock,
    },

    data() {
      return {
        favorites: [],
      };
    },

    mounted() {
      this.favorites = loadFavoritesFromStorage();
    },

    methods: {

    },
  };
</script>
