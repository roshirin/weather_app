<template>
  <div class="modal-overlay">
    <div class="modal-overlay__window modal-window">
      <div class="modal-window__header">Remove it?</div>
      <div class="modal-window__buttons">
        <button @click="confirmRemoval" class="options-button">Confirm</button>
        <button @click="cancelRemoval" class="options-button">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      confirmRemoval() {
        this.$emit('confirmRemoval');
      },
      cancelRemoval() {
        this.$emit('cancelRemoval');
      },
    },
  };
</script>

<style lang="scss">
  @import '../styles/modal-window.scss';
</style>
