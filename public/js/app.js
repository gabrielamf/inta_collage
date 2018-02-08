'use strict';

var begin = function begin() {
  document.addEventListener('dragstart', drag);
  document.addEventListener('dragover', allowDrop);
  document.addEventListener('drop', drop);

  var allowDrop = function allowDrop(ev) {
    ev.preventDefault();
  };

  var drag = function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  };
  // añadiendo funcion drop
  var drop = function drop(ev) {
    event.preventDefault();
    if (event.target.id === 'photo1' || event.target.id === 'photo2' || event.target.id === 'photo3' || event.target.id === 'photo4') {
      var idFoto = ev.dataTransfer.getData('text');
      ev.target.appendChild(document.getElementById(idFoto));
    }
  };
};
window.addEventListener('load', begin);