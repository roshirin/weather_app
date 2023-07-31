<template>
  <div class="favorites">
    <div class="weather-blocks-container">
      <div v-if="favorites.length === 0" class="no-favorites-message">
        <h2>{{ $t('favoritesEmptyHeader') }}</h2>
        <p>{{ $t('favoritesEmptyMsg') }}</p>
      </div>
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

<style lang="scss">
  .no-favorites-message {
    max-width: 620px;
    width: 100%;
    margin: 0 auto;
    padding: 30px 0;
    text-align: center;
    background-color: $color-white;

    @include onTablet {
      padding: 60px;
      border-radius: 30px;
    }
  }
</style>
