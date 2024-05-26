(function () {
  const baseRadiusInput = document.getElementById("cone-base-radius");
  const heightInput = document.getElementById("cone-height");
  const sectorsInput = document.getElementById("cone-sectors");
  const stacksInput = document.getElementById("cone-stacks");

  const baseRadiusValue = document.getElementById("cone-base-radius-value");
  const heightValue = document.getElementById("cone-height-value");
  const sectorsValue = document.getElementById("cone-sectors-value");
  const stacksValue = document.getElementById("cone-stacks-value");

  // Add event listeners to handle user input and render the cone
  baseRadiusInput.addEventListener("input", updateCone);
  heightInput.addEventListener("input", updateCone);
  sectorsInput.addEventListener("input", updateCone);
  stacksInput.addEventListener("input", updateCone);

  // Add event listeners to handle user input and render the cone
  baseRadiusInput.addEventListener("input", updateCone);
  heightInput.addEventListener("input", updateCone);
  sectorsInput.addEventListener("input", updateCone);
  stacksInput.addEventListener("input", updateCone);

  function updateCone() {
    const baseRadius = parseFloat(baseRadiusInput.value);
    const height = parseFloat(heightInput.value);
    const sectors = parseInt(sectorsInput.value, 10);
    const stacks = parseInt(stacksInput.value, 10);

    // Update the displayed values
    baseRadiusValue.textContent = baseRadiusInput.value;
    heightValue.textContent = heightInput.value;
    sectorsValue.textContent = sectorsInput.value;
    stacksValue.textContent = stacksInput.value;

    // Update slider background
    updateSliderBackground(baseRadiusInput);
    updateSliderBackground(heightInput);
    updateSliderBackground(sectorsInput);
    updateSliderBackground(stacksInput);

    // Assuming you have a WebGL context `gl` and a Smal library to handle the cone
    const cone = new Smal.Cone(
      gl,
      baseRadius,
      height,
      sectors,
      stacks,
      gl.smooth
    );
    // Render the cone using your WebGL context
    gl.model = cone;
  }

  function updateSliderBackground(slider) {
    const value =
      ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #4caf50 ${value}%, #607662 ${value}%)`;
  }

  // Initial render
  updateCone();
})();
