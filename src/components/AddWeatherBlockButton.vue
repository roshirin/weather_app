<template>
  <button class="add-block-button">+</button>
</template>

<style lang="scss">
  .add-block-button {
    width: 100%;
    height: 60px;

    border: none;
    background-color: $color-white;

    font-family: SourceSans, sans-serif;
    font-size: 42px;
    font-weight: 600;
    color: $color-dark-grey;

    cursor: pointer;
    transition: all 0.2s;

    @include onDesktop {
      border-radius: 30px;
    }

    &:hover {
      background-color: $color-light-grey;
    }
  }
</style>
