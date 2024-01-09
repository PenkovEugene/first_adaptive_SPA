document.addEventListener("DOMContentLoaded", function () {
  let zoomButton = document.getElementById("zoomButton");
  let image = document.querySelector(".image-wrapper img");

  zoomButton.addEventListener("click", function () {
    image.style.transform = "scale(1.1)";

    setTimeout(function () {
      image.style.transform = "scale(1)";
    }, 500);
  });

  image.style.transform = "scale(1)"
});