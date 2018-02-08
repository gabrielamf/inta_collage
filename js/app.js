let begin = () => {
  document.addEventListener('dragstart', drag);
  document.addEventListener('dragover', allowDrop);
  document.addEventListener('drop', drop);

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }
};

window.addEventListener('load', begin);