const plane = document.querySelector('.plane');
const liftOptions = document.querySelectorAll('.liftOption');
const thrustOptions = document.querySelectorAll('.thrustOption');
const weightOptions = document.querySelectorAll('.weightOption');
const testButton = document.querySelector('#test');
const selectedOptions = document.querySelector('.selectedOptions');
let angle = 0;

function updatePlaneRotation(event) {
  const rotationSpeed = 3; // Adjust as needed
  if (event.key === 'ArrowUp') {
    angle -= rotationSpeed;
  } else if (event.key === 'ArrowDown') {
    angle += rotationSpeed;
  }
  plane.style.transform = `rotate(${angle}deg)`;
}

function handleOptionSelection(options) {
  options.forEach((option) => {
    option.addEventListener('click', () => {
      options.forEach((opt) => opt.classList.remove('selected'));
      option.classList.add('selected');
    });
  });
}

function launchPlane() {
  const selectedLift = document.querySelector('.liftOption.selected');
  const selectedThrust = document.querySelector('.thrustOption.selected');
  const selectedWeight = document.querySelector('.weightOption.selected');
  if (
    selectedLift === null ||
    selectedThrust === null ||
    selectedWeight === null
  ) {
    selectedOptions.innerHTML = 'must choose option for each';
  }
  //logic to launch plane here
  else
  //just for testing
    selectedOptions.innerHTML = `selected ${selectedLift} ${selectedThrust} ${selectedWeight}`;
}

handleOptionSelection(liftOptions);
handleOptionSelection(thrustOptions);
handleOptionSelection(weightOptions);
document.addEventListener('keydown', updatePlaneRotation);
testButton.addEventListener('click', launchPlane);
