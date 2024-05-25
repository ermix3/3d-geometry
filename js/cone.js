(function() {
  const baseRadiusInput = document.getElementById('cone-base-radius');
  const heightInput = document.getElementById('cone-height');
  const sectorsInput = document.getElementById('cone-sectors');
  const stacksInput = document.getElementById('cone-stacks');

  // Add event listeners to handle user input and render the cone
  baseRadiusInput.addEventListener('input', updateCone);
  heightInput.addEventListener('input', updateCone);
  sectorsInput.addEventListener('input', updateCone);
  stacksInput.addEventListener('input', updateCone);

  function updateCone() {
      const baseRadius = parseFloat(baseRadiusInput.value);
      const height = parseFloat(heightInput.value);
      const sectors = parseInt(sectorsInput.value, 10);
      const stacks = parseInt(stacksInput.value, 10);

      // Assuming you have a WebGL context `gl` and a Smal library to handle the cone
      const cone = new Smal.Cone(gl, baseRadius, height, sectors, stacks, gl.smooth);
      // Render the cone using your WebGL context
      gl.model = cone;
  }

  // Initial render
  updateCone();
})();
