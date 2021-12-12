const increaseValue = () => {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
};

const decreaseValue = () => {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : '';
  value--;
  document.getElementById('number').value = value;
};

const updatelocation = () => {
  const locationInput = document.getElementById('locationNameInput').value;
  const locationHeaderName = document.getElementById('locationHeaderName');
  locationHeaderName.textContent = locationInput;
};

const resetLocationName = () => {
  const locationInput = document.getElementById('locationNameInput');
  locationInput.value = 'Seattle';
  updatelocation();
};

const registerEventHandlers = () => {
  increaseValue();
  const increase = document.getElementById('increase');
  increase.addEventListener('click', increaseValue());

  decreaseValue();
  const decrease = document.getElementById('decrease');
  decrease.addEventListener('click', decreaseValue());

  updatelocation();
  const locationNameInput = document.getElementById('locationNameInput');
  locationNameInput.addEventListener('input', updatelocation);

  const locationNameResetButton = document.getElementById('locationNameReset');
  locationNameResetButton.addEventListener('click', resetLocationName);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
