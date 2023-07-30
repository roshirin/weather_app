<template>
  <button class="add-block-button">+</button>
</template>

<style lang="scss">
  @import '../styles/utils/mixins';
  @import '../styles/utils/vars';

  .add-block-button {
    width: 100%;
    height: 60px;
    margin-top: 5px;
    padding-bottom: 8px;

    border: none;
    background-color: $color-white;

    font-family: SourceSans, sans-serif;
    font-size: 60px;
    line-height: 60px;
    color: $color-medium-grey;

    cursor: pointer;
    transition: all 0.2s;

    @include onDesktop {
      margin-top: 10px;
      border-radius: 30px;
    }

    &:hover {
      background-color: $color-white-button-hover;
    }
  }
</style>
