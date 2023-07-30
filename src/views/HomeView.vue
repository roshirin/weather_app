<template>
  <div>
    <div class="weather-blocks-container">
      <div v-for="weatherBlock in weatherBlocks" :key="weatherBlock.id">
        <WeatherBlock 
          :isFirstBlock="weatherBlocks.length === 1"
          @removeBlock="showRemoveModal(weatherBlock.id)"
        />
      </div>

      <RemoveWeatherBlockModal
        v-if="isRemoveModalShown"
        @confirmRemoval="removeWeatherBlock()"
        @cancelRemoval="closeRemoveModal()"
      />
    </div>

    <AddWeatherBlockButton
      v-if="weatherBlocks.length < 5"
      @click="addWeatherBlock"
    />
  </div>
</template>

<script>
  import WeatherBlock from '@/components/WeatherBlock.vue';
  import RemoveWeatherBlockModal from '@/components/RemoveWeatherBlockModal.vue';
  import AddWeatherBlockButton from '@/components/AddWeatherBlockButton.vue';
  import { v4 as uuidv4 } from 'uuid';

  export default {
    components: {
      WeatherBlock,
      RemoveWeatherBlockModal,
      AddWeatherBlockButton,
    },

    data() {
      return {
        weatherBlocks: [],
        favorites: [],
        isRemoveModalShown: false,
        blockRemovedId: null,
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
    },
  };
</script>
