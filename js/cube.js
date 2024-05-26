// ui_cube.js
// ==========
// UI event handlers for cube
//
//  AUTHOR: Song Ho Ahn (song.ahn@gmail.com)
// CREATED: 2024-05-07
// UPDATED: 2024-05-10
///////////////////////////////////////////////////////////////////////////////

// Must use IIFE to avoid _let_ variable redeclaration errors
(() => {
  let labelSide = document.getElementById("labelSide");
  let rangeSide = document.getElementById("rangeSide");
  rangeSide.value = 1;
  rangeSide.addEventListener("input", (e) => {
    labelSide.innerText = rangeSide.value;
    gl.model.setSideLength(parseFloat(rangeSide.value));
  });
})();
