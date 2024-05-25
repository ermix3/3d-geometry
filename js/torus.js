(function() {
  const innerRadiusInput = document.getElementById('torus-inner-radius');
  const outerRadiusInput = document.getElementById('torus-outer-radius');
  const sidesInput = document.getElementById('torus-sides');
  const ringsInput = document.getElementById('torus-rings');

  // Add event listeners to handle user input and render the torus
  innerRadiusInput.addEventListener('input', updateTorus);
  outerRadiusInput.addEventListener('input', updateTorus);
  sidesInput.addEventListener('input', updateTorus);
  ringsInput.addEventListener('input', updateTorus);

  function updateTorus() {
      const innerRadius = parseFloat(innerRadiusInput.value);
      const outerRadius = parseFloat(outerRadiusInput.value);
      const sides = parseInt(sidesInput.value, 10);
      const rings = parseInt(ringsInput.value, 10);

      // Assuming you have a WebGL context `gl` and a Smal library to handle the torus
      const torus = new Smal.Torus(gl, innerRadius, outerRadius, sides, rings, gl.smooth);
      // Render the torus using your WebGL context
      gl.model = torus;
  }

  // Initial render
  updateTorus();
})();
