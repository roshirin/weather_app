<template>
  <div class="loader">
    <div class="loader__content"></div>
  </div>
</template>

<style lang="scss">
  .loader {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    &__content {
      border-radius: 50%;
      width: 28px;
      height: 28px;
      margin: 1em auto;
      border: 0.3em solid $color-light-grey;
      border-left-color: $color-black;
      animation: loader 1.2s infinite linear;
    }
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>