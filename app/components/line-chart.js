/* eslint-disable no-unused-vars */
// app/components/line-chart.js

import Component from '@glimmer/component';
import { action } from '@ember/object';
import Chart from 'chart.js/auto';
console.log('hello from line-chart.js file');
export default class LineChartComponent extends Component {
  chart = null;

  @action
  setupChart(element) {
    console.log('HELLO FROM setupChart()');
    if (!this.chart) {
      const ctx = element.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Telegram', 'Facebook', 'Instagram', 'WhatsApp', 'Snapchat'],
          datasets: [
            {
              label: 'Downloads',
              data: [5000, 10000, 20000, 30000, 50000],
              borderColor: 'blue',
              backgroundColor: 'rgba(0, 0, 255, 0.1)',
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 10000,
              },
            },
          },
        },
      });
    }
  }
}
