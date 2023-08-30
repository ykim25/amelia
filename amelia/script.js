const plane = document.querySelector('.plane');
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

document.addEventListener('keydown', updatePlaneRotation);
