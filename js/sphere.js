(function() {
  const radiusInput = document.getElementById('radius');
  const sectorsInput = document.getElementById('sectors');
  const stacksInput = document.getElementById('stacks');

  // Add event listeners to handle user input and render the sphere
  radiusInput.addEventListener('input', updateSphere);
  sectorsInput.addEventListener('input', updateSphere);
  stacksInput.addEventListener('input', updateSphere);

  function updateSphere() {
      const radius = parseFloat(radiusInput.value);
      const sectors = parseInt(sectorsInput.value, 10);
      const stacks = parseInt(stacksInput.value, 10);

      // Assuming you have a WebGL context `gl` and a Smal library to handle the sphere
      const sphere = new Smal.Sphere(gl, radius, sectors, stacks, gl.smooth);
      // Render the sphere using your WebGL context
      gl.model = sphere;
  }

  // Initial render
  updateSphere();
})();

