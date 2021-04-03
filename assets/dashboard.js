/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  
  let dataJson = localStorage.getItem("data");
  let data = JSON.parse(dataJson) ?? [];

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(item=>item.ogrno +" - "+ item.adi + " " + item.soyadi),
      datasets: [{
        data: data.map(item=>item.basarinotu),
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
