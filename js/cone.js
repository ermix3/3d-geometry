(function () {
    const baseRadiusInput = document.getElementById("cone-base-radius");
    const heightInput = document.getElementById("cone-height");
    const sectorsInput = document.getElementById("cone-sectors");
    const stacksInput = document.getElementById("cone-stacks");
    const volumneSurface = document.getElementById("volumneSurface");

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

        // update volumne and surface
        volumneSurface.innerHTML =
            "Volumne = " +
            calculateConeVolume(baseRadius, height).toFixed(2) +
            "<br/>Surface Aria = " +
            calculateConeSurfaceArea(baseRadius, height).toFixed(2);
    }

    // Initial render
    updateCone();
})();

function calculateConeVolume(baseRadius, height) {
    return (1 / 3) * Math.PI * Math.pow(baseRadius, 2) * height;
}

function calculateConeSurfaceArea(baseRadius, height) {
    const slantHeight = Math.sqrt(
        Math.pow(baseRadius, 2) + Math.pow(height, 2)
    );
    return Math.PI * baseRadius * (baseRadius + slantHeight);
}
