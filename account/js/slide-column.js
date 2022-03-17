(function () {
  'use strict'

  document.querySelector('#openFilters').addEventListener('click', function () {
    document.querySelector('.filter-column-collapse').classList.toggle('open');
    document.querySelector('.products').classList.toggle('narrow');
  });
  document.querySelector('.apply').addEventListener('click', function () {
    document.querySelector('.filter-column-collapse').classList.toggle('open');
    document.querySelector('.products').classList.toggle('narrow');
  });
})()
