var Chart = require('chart.js');
var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: data,
  options: options
});
