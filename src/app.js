$(document).ready(function () {
  const moveTop = document.querySelector("#main-content");

  moveTop.addEventListener("click", () => {
    const msg = "Button Clicked";
    console.log(msg);
    window.scrollTo({
      x: 0,
      y: 0,
    });
  });

  const moveMiddle = document.querySelector("#projects");
  moveMiddle.addEventListener("click", () => {
    const msg = "Button Clicked";
    console.log(msg);
    window.scrollTo({
      x: 0,
      y: 1000,
    });
  });
});
