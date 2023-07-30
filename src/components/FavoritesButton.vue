<template>
  <button class="favorites-button">
    <img v-if="isInFavorites" src="../img/icons/favorites-star-full.svg" alt="Favorite Star" class="favorites-icon" />
    <img v-else src="../img/icons/favorites-star-empty.svg" alt="Empty Favorite Star" class="favorites-icon" />
  </button>
</template>

<script>
  export default {
    props: {
      isInFavorites: Boolean,
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
    width: 32px;
    height: 32px;
  };
</style>
