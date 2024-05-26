///////////////////////////////////////////////////////////////////////////////
// main entry point: execute after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const geometrySelect = document.getElementById("geometry-select");
  const includeBlock = document.getElementById("includeblock");

  // 1. init webgl with your canvas ID
  // then, use "gl" global object to manipulate the 3D content
  initWebGL("webglview");

  // 3. init DOM elements & events
  initControls();

  geometrySelect.addEventListener("change", () => {
    const selectedGeometry = geometrySelect.value;
    document.getElementById('modelname').textContent = selectedGeometry;
    includeHtml("includeblock", `html/${selectedGeometry.toLowerCase()}.html`,
                `js/${selectedGeometry.toLowerCase()}.js`);
  });

  // Initialize with the default geometry
  document.getElementById('geometry-select').value = 'Sphere';
  document.getElementById('modelname').textContent = 'Sphere';
  includeHtml("includeblock", "html/sphere.html", "js/sphere.js");
});

///////////////////////////////////////////////////////////////////////////////
function initControls() {
  let checkTexture = document.getElementById("checkTexture");
  checkTexture.checked = true;
  checkTexture.addEventListener(
      "click", () => (gl.textureEnabled = checkTexture.checked));

  let checkSmooth = document.getElementById("checkSmooth");
  checkSmooth.checked = false;
  checkSmooth.addEventListener("click", () => {
    gl.smooth = checkSmooth.checked;
    gl.model.setSmooth(gl.smooth);
  });

  let buttonReset = document.getElementById("buttonReset");
  buttonReset.addEventListener("click", () => resetCamera());
}

///////////////////////////////////////////////////////////////////////////////
// dynamically add html and js
// PARAMS: domId: the container DOM ID
//         html : URL to html file
//         js   : URL to js file
function includeHtml(domId, html, js) {
  fetch(html)
      .then((response) => response.text())
      .then((text) => {
        // success
        log("loaded HTML: " + html);
        let dom = document.getElementById(domId);
        dom.innerHTML = text;
        // load JS after html is loaded
        loadJavaScript(js);
        // resize canvas manually because page was updated
        handleResize();
      })
      .catch((e) => {
        // failed
        console.log("Failed to load " + html);
      });
}

///////////////////////////////////////////////////////////////////////////////
function loadJavaScript(file) {
  if (!file)
    return;

  let jsId = btoa(file); // encode to base64 string
  let script = document.createElement("script");
  script.id = jsId;

  // add script to dom
  if (!document.getElementById("jsId"))
    document.head.appendChild(script);

  // callback onload
  script.onload = () => {
    // parsing JS is completed, safe to execute it here
    log("loaded JS: " + file);
  };
  // callback onerror
  script.onerror = (e) => console.log(e);

  // start to load
  script.src = file;
}
