<template>
  <div class="weather-chart">
    <div class="weather-chart__header">{{ $t('chartHeader') }}</div>
    <canvas ref="weatherChart"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js/auto';
  import { prepareChartData } from '@/helpers';

  export default {
    props: {
      chartData: Array,
      isFiveDaysChart: Boolean,
    },

    mounted() {
      this.$nextTick(() => {
        this.createWeatherChart();
      })
    },

    watch: {
      chartData: {
        handler(newData) {
          this.updateWeatherChart(newData);
        },
        deep: true,
      },
    },

    methods: {
      createWeatherChart() {
        const context = this.$refs.weatherChart.getContext('2d');

        const { 
          xAxisLabels, 
          graphTemperature, 
          graphDayTemp, 
          graphNightTemp, 
        } = prepareChartData(this.chartData, this.isFiveDaysChart);

        const data = {
          labels: xAxisLabels,
          datasets: [
            {
              label: 'Temperature (°C)',
              data: graphTemperature,
              borderColor: 'rgb(255, 255, 255)',
            },
            {
              label: 'Day Temperature (°C)',
              data: graphDayTemp,
              borderColor: 'rgb(255, 255, 255)',
            },
            {
              label: 'Night Temperature (°C)',
              data: graphNightTemp,
              borderColor: 'rgb(0, 0, 255)',
            },
          ],
        };

        const config = {
          type: 'line',
          data: data,
          options: {
            tension: 0.3,
            elements: {
              point: {
                borderWidth: 3,
                radius: 2,
                hitRadius: 8,
                hoverRadius: 5,
                style: 'circle',
              },
            },
            scales: {
              x: {
                border: {
                  display: false,
                },
                ticks: {
                  display: true,
                  color: '#ffffff',
                  'padding': 20,
                },
                grid: {
                  display: false,
                },
              },
              y: {
                border: {
                  display: false,
                },
                ticks: {
                  color: '#ffffff',
                  'padding': 20,
                  callback: (lable, index) => {
                    if (index % 2 === 0) {
                      return lable + '°C';
                    }
                    
                    return '';
                  }
                },
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }
        };

        this.chart = new Chart(context, config);
      },

      updateWeatherChart(newData) {
        const { 
          xAxisLabels, 
          graphTemperature, 
          graphDayTemp, 
          graphNightTemp, 
        } = prepareChartData(newData, this.isFiveDaysChart);

        this.chart.data.labels = xAxisLabels;

        const datasets = this.chart.data.datasets;
        datasets[0].data = graphTemperature;
        datasets[1].data = graphDayTemp;
        datasets[2].data = graphNightTemp;

        this.chart.update();
      },
    },
  };
</script>

<style lang="scss">
  .weather-chart {
    padding-top: 10px;
    border-top: 1px solid #8dc1ca;

    @include onDesktop {
      flex-basis: 56%;
      padding-left: 20px;
      border-top: none;
      border-left: 1px solid #8dc1ca;
    }

    &__header {
      margin-bottom: 20px;
      text-align: center;
      font-size: 30px;
      color: $color-white;
    }
  }
</style>

