<template>
  <button class="favorites-button" @click="handleFavoriteToggle">
    <img v-if="isInFavorites" src="../img/icons/icon-star-full.svg" class="favorites-icon" />
    <img v-else src="../img/icons/icon-star-empty.svg" class="favorites-icon" />
  </button>
</template>

<script>
  import {
    loadFavoritesFromStorage,
    saveFavoritesToStorage,
  } from '@/helpers';

  export default {
    data() {
      return {
        favorites: [],
        isInFavorites: false,
      }
    },

    props: {
      selectedCity: String,
      coordinates: Array,
    },

    mounted() {
      this.favorites = loadFavoritesFromStorage();
      this.getFavoriteStatus();
    },

    watch: {
      selectedCity: {
        handler() {
          this.favorites = loadFavoritesFromStorage();
          this.getFavoriteStatus();
        }
      }
    },

    methods: {
      addToFavorites(storageEntry) {
        this.favorites.push(storageEntry);
        console.log(this.favorites);
        saveFavoritesToStorage(this.favorites);
      },

      removeFromFavorites(storageEntry) {
        this.favorites = this.favorites.filter(
          entry => entry.cityName !== storageEntry.cityName
        );
        saveFavoritesToStorage(this.favorites);
      },

      getFavoriteStatus() {
        this.isInFavorites = this.favorites.some(
          entry => entry.cityName === this.selectedCity,
        );
      },

      handleFavoriteToggle() {
        this.favorites = loadFavoritesFromStorage();

        const favorites = this.favorites;
        const storageEntry = {
          cityName: this.selectedCity,
          coordinates: this.coordinates,
        };
        const isFavorite = favorites.some(
          entry => entry.cityName === storageEntry.cityName
        );

        if (isFavorite !== this.isInFavorites) {
          this.isInFavorites = !this.isInFavorites;

          return;
        }

        if (isFavorite) {
          this.removeFromFavorites(storageEntry);
          this.isInFavorites = false;

          return;
        }

        if (favorites.length >= 5) {
          this.$emit('extraFavoriteAdded', this.selectedCity);

          return;
        }

        this.addToFavorites(storageEntry);
        this.isInFavorites = true;
      },
    }
  }
</script>

<style lang="scss">
  .favorites-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
  }

  .favorites-icon {
    width: 56px;
    height: 42px;
  };
</style>
