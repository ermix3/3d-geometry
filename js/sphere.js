(function() {
const radiusInput = document.getElementById("radius");
const sectorsInput = document.getElementById("sectors");
const stacksInput = document.getElementById("stacks");

const radiusValue = document.getElementById("radius-value");
const sectorsValue = document.getElementById("sectors-value");
const stacksValue = document.getElementById("stacks-value");

// Add event listeners to handle user input and render the sphere
radiusInput.addEventListener("input", updateSphere);
sectorsInput.addEventListener("input", updateSphere);
stacksInput.addEventListener("input", updateSphere);

function updateSphere() {
  const radius = parseFloat(radiusInput.value);
  const sectors = parseInt(sectorsInput.value, 10);
  const stacks = parseInt(stacksInput.value, 10);

  // Update the displayed values
  radiusValue.textContent = radiusInput.value;
  sectorsValue.textContent = sectorsInput.value;
  stacksValue.textContent = stacksInput.value;

  // Update slider background
  updateSliderBackground(radiusInput);
  updateSliderBackground(sectorsInput);
  updateSliderBackground(stacksInput);

  // Assuming you have a WebGL context `gl` and a Smal library to handle the
  // sphere
  const sphere = new Smal.Sphere(gl, radius, sectors, stacks, gl.smooth);
  // Render the sphere using your WebGL context
  gl.model = sphere;
}

function updateSliderBackground(slider) {
  const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background =
      `linear-gradient(to right, #4caf50 ${value}%, #607662 ${value}%)`;
}

// Initial render
updateSphere();
})();
