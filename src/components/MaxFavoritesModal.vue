<template>
  <div class="modal-overlay">
    <div class="modal-overlay__window modal-window">
      <div class="modal-window__header">{{ $t('favoritesExceedModalMsg1') }} {{ extraFavoriteCity }}, {{ $t('favoritesExceedModalMsg2') }}</div>
      <div class="modal-window__buttons">
        <button @click="closeModal" class="options-button">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      extraFavoriteCity: String,
    },

    methods: {
      closeModal() {
        this.$emit('closeModal');
      },
    },
  };
</script>

<style lang="scss">
  @import '../styles/modal-window.scss';
</style>
