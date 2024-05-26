(function () {
  const innerRadiusInput = document.getElementById("torus-inner-radius");
  const outerRadiusInput = document.getElementById("torus-outer-radius");
  const sidesInput = document.getElementById("torus-sides");
  const ringsInput = document.getElementById("torus-rings");

  const innerRadiusValue = document.getElementById("torus-inner-radius-value");
  const outerRadiusValue = document.getElementById("torus-outer-radius-value");
  const sidesValue = document.getElementById("torus-sides-value");
  const ringsValue = document.getElementById("torus-rings-value");

  // Add event listeners to handle user input and render the torus
  innerRadiusInput.addEventListener("input", updateTorus);
  outerRadiusInput.addEventListener("input", updateTorus);
  sidesInput.addEventListener("input", updateTorus);
  ringsInput.addEventListener("input", updateTorus);

  function updateTorus() {
    const innerRadius = parseFloat(innerRadiusInput.value);
    const outerRadius = parseFloat(outerRadiusInput.value);
    const sides = parseInt(sidesInput.value, 10);
    const rings = parseInt(ringsInput.value, 10);

    // Update the displayed values
    innerRadiusValue.textContent = innerRadiusInput.value;
    outerRadiusValue.textContent = outerRadiusInput.value;
    sidesValue.textContent = sidesInput.value;
    ringsValue.textContent = ringsInput.value;

    // Update slider background
    updateSliderBackground(innerRadiusInput);
    updateSliderBackground(outerRadiusInput);
    updateSliderBackground(sidesInput);
    updateSliderBackground(ringsInput);

    // Assuming you have a WebGL context `gl` and a Smal library to handle the torus
    const torus = new Smal.Torus(
      gl,
      innerRadius,
      outerRadius,
      sides,
      rings,
      gl.smooth
    );
    // Render the torus using your WebGL context
    gl.model = torus;
  }

  function updateSliderBackground(slider) {
    const value =
      ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #4caf50 ${value}%, #607662 ${value}%)`;
  }

  // Initial render
  updateTorus();
})();
