$(document).ready(function () {
  const moveTop = document.querySelector("#main-content");

  moveTop.addEventListener("click", () => {
    const msg = "Button Clicked";
    console.log(msg);
    document.scrollTo({
      x: 0,
      y: 0,
    });
  });

  const moveMiddle = document.querySelector("#contact-me");
  moveMiddle.addEventListener("click", () => {
    const msg = "Button Clicked";
    console.log(msg);
    document.scrollTo({
      x: 0,
      y: 1000,
    });
  });
});
