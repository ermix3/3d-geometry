(function () {
  const baseRadiusInput = document.getElementById("cylinder-base-radius");
  const topRadiusInput = document.getElementById("cylinder-top-radius");
  const heightInput = document.getElementById("cylinder-height");
  const sectorsInput = document.getElementById("cylinder-sectors");
  const stacksInput = document.getElementById("cylinder-stacks");

  const baseRadiusValue = document.getElementById("cylinder-base-radius-value");
  const topRadiusValue = document.getElementById("cylinder-top-radius-value");
  const heightValue = document.getElementById("cylinder-height-value");
  const sectorsValue = document.getElementById("cylinder-sectors-value");
  const stacksValue = document.getElementById("cylinder-stacks-value");

  // Add event listeners to handle user input and render the cylinder
  baseRadiusInput.addEventListener("input", updateCylinder);
  topRadiusInput.addEventListener("input", updateCylinder);
  heightInput.addEventListener("input", updateCylinder);
  sectorsInput.addEventListener("input", updateCylinder);
  stacksInput.addEventListener("input", updateCylinder);

  function updateCylinder() {
    const baseRadius = parseFloat(baseRadiusInput.value);
    const topRadius = parseFloat(topRadiusInput.value);
    const height = parseFloat(heightInput.value);
    const sectors = parseInt(sectorsInput.value, 10);
    const stacks = parseInt(stacksInput.value, 10);

    // Update the displayed values
    baseRadiusValue.textContent = baseRadiusInput.value;
    topRadiusValue.textContent = topRadiusInput.value;
    heightValue.textContent = heightInput.value;
    sectorsValue.textContent = sectorsInput.value;
    stacksValue.textContent = stacksInput.value;

    // Update slider background
    updateSliderBackground(baseRadiusInput);
    updateSliderBackground(topRadiusInput);
    updateSliderBackground(heightInput);
    updateSliderBackground(sectorsInput);
    updateSliderBackground(stacksInput);

    // Assuming you have a WebGL context `gl` and a Smal library to handle the
    // cylinder
    const cylinder = new Smal.Cylinder(
      gl,
      baseRadius,
      topRadius,
      height,
      sectors,
      stacks,
      gl.smooth,
    );
    // Render the cylinder using your WebGL context
    gl.model = cylinder;
  }

  function updateSliderBackground(slider) {
    const value =
      ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #4caf50 ${value}%, #607662 ${value}%)`;
  }

  // Initial render
  updateCylinder();
})();
