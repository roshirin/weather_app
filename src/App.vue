<template>
  <header class="header">
    <div class="header__content container">
      <nav class="navigation">
        <router-link :to="{ name: 'home' }">{{ $t('header.home') }}</router-link>
        <router-link :to="{ name: 'favorites' }">{{ $t('header.favorites') }}</router-link>
      </nav>
      <div class="language">
        <select class="language__select" v-model="$i18n.locale">
          <option value="en">en</option>
          <option value="uk">укр</option>
        </select>
      </div>
    </div>
  </header>
  <main class="main">
    <div class="container page">
      <router-view/>
    </div>
  </main>
</template>

<style lang="scss">
  body, ul {
    margin: 0;
    padding: 0;
  }

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    font-family: SourceSans, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    color: $color-font-dark;
  }

  .header {
    min-height: 72px;
    background-color: $color-light-blue;

    &__content {
      box-sizing: border-box;
      display: flex;
      padding: 0 40px;
      justify-content: space-between;
    }
  }

  .main {
    padding-bottom: 20px;
    flex-grow: 1;
    background: linear-gradient(to bottom, $color-light-blue, $color-lightest-blue);
  }

  .navigation {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px 0;

    @include onTablet {
      padding: 30px 0;
    }

    a {
      font-size: 22px;
      font-weight: bold;
      color: $color-font-dark;
      text-decoration: none;

      &.router-link-exact-active {
        color: $color-font-active;
      }
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .page {
    @include onDesktop {
      box-sizing: border-box;
      padding: 0 30px;
    }
  }

  .weather-blocks-container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include onTablet {
      gap: 30px;
    }
  }

  .language {
    display: flex;
    align-items: center;

    &__select {
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 20px;
      color: $color-font-dark;
    }
  }
</style>
