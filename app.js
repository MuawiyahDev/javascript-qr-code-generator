// sizes
let sizesArray = ["100x100", "200x200", "300x300", "400x400", "500x500"];

// Variables
let sizes = document.getElementById("sizes");
let text = document.getElementById("text");
let right = document.getElementById("right");
let form = document.getElementById("form");
let code = document.getElementById("code");
let downloadBtn = document.getElementById("download");

// Setting array sizes
sizesArray.forEach((element) => {
  sizes.innerHTML += `<option value="${element}">${element}</option>`;
});

// If user submit the form
form.onsubmit = function (event) {
  event.preventDefault();
  right.style.display = "flex";
  code.setAttribute(
    "src",
    `https://chart.googleapis.com/chart?chs=${sizes.value}&cht=qr&chl=${text.value}&chld=L|1&choe=UTF-8`
  );
};

downloadBtn.onclick = function () {
  download(code.getAttribute("src"));
};

// Download function
function download(source) {
  const fileName = source.split("/").pop();
  var el = document.createElement("a");
  el.setAttribute("href", source);
  el.setAttribute("download", fileName);
  document.body.appendChild(el);
  el.click();
  el.remove();
}
