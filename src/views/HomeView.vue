<template>
  <div>
    <div class="weather-blocks-container">
      <div v-for="weatherBlock in weatherBlocks" :key="weatherBlock.id">
        <WeatherBlock 
          :isFirstBlock="weatherBlocks.length === 1"
          @removeBlock="showRemoveModal(weatherBlock.id)"
          @extraFavoriteAdded="handleMaxFavoritesReached"
        />
      </div>

      <RemoveWeatherBlockModal
        v-if="isRemoveModalShown"
        @confirmRemoval="removeWeatherBlock()"
        @cancelRemoval="closeRemoveModal()"
      />

      <MaxFavoritesModal
        v-if="isMaxFavoritesModalShown"
        :extraFavoriteCity="extraFavoriteCity"
        @closeModal="closeMaxFavoritesModal()"
      />
    </div>

    <AddWeatherBlockButton
      v-if="weatherBlocks.length < 5"
      @click="addWeatherBlock"
    />
  </div>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid';
  import WeatherBlock from '@/components/WeatherBlock.vue';
  import RemoveWeatherBlockModal from '@/components/RemoveWeatherBlockModal.vue';
  import AddWeatherBlockButton from '@/components/AddWeatherBlockButton.vue';
  import MaxFavoritesModal from '@/components/MaxFavoritesModal.vue';

  export default {
    components: {
      WeatherBlock,
      RemoveWeatherBlockModal,
      AddWeatherBlockButton,
      MaxFavoritesModal,
    },

    data() {
      return {
        weatherBlocks: [],
        favorites: [],
        isRemoveModalShown: false,
        blockRemovedId: null,
        isMaxFavoritesModalShown: false,
        extraFavoriteCity: null,
      };
    },

    mounted() {
      this.addWeatherBlock();
    },

    methods: {
      addWeatherBlock() {
        const id = uuidv4();

        this.weatherBlocks.push({
          id,
        });
      },

      showRemoveModal(blockId) {
        this.isRemoveModalShown = true;
        this.blockRemovedId = blockId;
      },

      closeRemoveModal() {
        this.isRemoveModalShown = false;
        this.blockRemovedId = null;
      },

      removeWeatherBlock() {
        if (this.blockRemovedId) {
          const filteredBlocks = this.weatherBlocks.filter(({ id }) => {
            return id !== this.blockRemovedId;
          });

          this.weatherBlocks = filteredBlocks;
        }

        this.closeRemoveModal();
      },

      handleMaxFavoritesReached(cityName) {
        this.extraFavoriteCity = cityName;
        this.isMaxFavoritesModalShown = true;
      },

      closeMaxFavoritesModal() {
        this.isMaxFavoritesModalShown = false;
      }
    },
  };
</script>
