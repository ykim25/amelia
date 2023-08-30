const plane = document.querySelector('.plane');
const liftOptions = document.querySelectorAll('.liftOption');
const thrustOptions = document.querySelectorAll('.thrustOption');
const weightOptions = document.querySelectorAll('.weightOption');
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
      // Remove the 'selected' class from all buttons
      options.forEach((opt) => opt.classList.remove('selected'));

      // Add the 'selected' class to the clicked button
      option.classList.add('selected');
    });
  });
}

handleOptionSelection(liftOptions);
handleOptionSelection(thrustOptions);
handleOptionSelection(weightOptions);
document.addEventListener('keydown', updatePlaneRotation);
