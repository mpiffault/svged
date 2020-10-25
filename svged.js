function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function initSvgEd () {
    const svgHeader = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="500">`;
    const svgFooter = `</svg>`;
    let baseContent = `<defs>
  <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="20" height="60">
    <path d="M0,0 l0,60" style="stroke:black; stroke-width:6"></path>
    <line x1="0" y1="10px" x2="40px" y2="10px" style="stroke:black;stroke-width:3px;"></line>
  </pattern>
</defs>
<rect x="0" y="0" rx="50%" style="fill:#ee66ee" width="400" height="400"></rect>
<circle cx="100" cy="150" r="50" stroke="black" stroke-width="3" fill="white"></circle>
<circle cx="100" cy="160" r="5" stroke="black" stroke-width="3" fill="black"></circle>
<circle cx="300" cy="150" r="50" stroke="black" stroke-width="3" fill="white"></circle>
<circle cx="300" cy="160" r="4" stroke="black" stroke-width="3" fill="black"></circle>
<rect x="60" y="250" width="270" height="90" rx="20" stroke="black" stroke-width="3" fill="white"></rect>
<rect x="60" y="250" width="270" height="90" rx="20" stroke="black" stroke-width="3" fill="url(#diagonalHatch)"></rect>`;

    const svgSource = document.getElementById('svg-source');
    svgSource.value = baseContent;

    const svgContainer = document.getElementById('svg-container');

    svgSource.oninput = function (e) {
        e.target.value = xmlFormatter.prettyPrint(e.target.value);
        svgContainer.innerHTML = svgHeader + e.target.value + svgFooter;
    }

    svgSource.dispatchEvent(new Event('input', { bubbles: true }))
}
