<template>
  <button class="remove-block-button"></button>
</template>

<style lang="scss">
  .remove-block-button {
    height: 34px;
    width: 34px;
    flex: 0 0 auto;

    padding: 2px 0 0;

    border-radius: 50%;
    border: none;
    background-color: $color-white-transparent;

    transition: all 0.2s;
    cursor: pointer;

    &::before {
      content: url('../img/icons/icon-cross.svg');
    }

    &:hover {
      background-color: $color-white-button-hover;
    }
  }
</style>
