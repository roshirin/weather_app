<template>
  <div class="modal-overlay">
    <div class="modal-window">
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
  @import '../styles/utils/mixins';
  @import '../styles/utils/vars';

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: #00000070;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .modal-window {
    background-color: #fff;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 2px 10px #00000020;

    @include onTablet {
      padding: 40px;
    }

    @include onDesktop {
      padding: 50px;
    }

    &__header {
      text-align: center;
      font-size: 26px;
      font-weight: 600;
    }

    &__buttons {
      display: flex;
      justify-content: space-around;
      gap: 30px;
      margin-top: 20px;

      @include onTablet {
        margin-top: 40px;
      }
    }
  }

  .options-button {
    min-width: 120px;
    padding: 10px 26px;
    border: none;
    border-radius: 6px;

    font-family: SourceSans, sans-serif;
    font-size: 18px;
    cursor: pointer;
  }

  .options-button:first-child {
    background-color: $color-font-active;
    color: $color-white;
  }

  .options-button:last-child {
    background-color: $color-medium-grey;
    color: $color-font-dark;
  }
</style>
