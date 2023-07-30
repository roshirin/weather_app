<template>
  <header class="header">
    <nav class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/favorites">Favorites</router-link>
    </nav>
  </header>
  <main class="main">
    <div class="container page">
      <router-view/>
    </div>
  </main>
</template>

<style lang="scss">
  @import 'styles/utils/mixins';
  @import 'styles/utils/vars';

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
    background-color: $color-light-blue;
  }

  .main {
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
</style>
