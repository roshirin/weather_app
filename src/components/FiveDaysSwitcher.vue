<template>
  <label class="mode-switcher">
    <input
      type="checkbox"
      :checked="isFiveDaysChart"
      @change="toggleFiveDaysChart"
      class="mode-switcher__input"
    />
    <span
      :data-content="isFiveDaysChart ? '5d' : '1d'"
      class="mode-switcher__slider"
    >
    </span>
  </label>
</template>

<script>
  export default {
    props: {
      isFiveDaysChart: Boolean,
    },
    methods: {
      toggleFiveDaysChart(event) {
        this.$emit('toggle', event.target.checked);
      },
    },
  };
</script>

<style lang="scss">
  .mode-switcher {
    display: inline-block;
    position: relative;
    flex: 0 0 auto;
    width: 48px;
    height: 30px;

    &__input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    &__slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: $color-medium-grey;
      border-radius: 30px;
      transition: 0.4s;

      &::before {
        position: absolute;
        content: attr(data-content);
        height: 24px;
        width: 26px;
        left: 3px;
        bottom: 3px;

        text-align: center;
        background-color: $color-white;
        border-radius: 26px;

        font-size: 14px;
        line-height: 25px;
        transition: 0.3s;
      }
    }

    &__input:checked + &__slider {
      background-color: $color-font-active;
    }

    &__input:checked + &__slider:before {
      transform: translateX(16px);
    }
  }
</style>
