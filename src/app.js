$(document).ready(function () {
  const moveTop = document.querySelector("#main-content");

  moveTop.addEventListener("click", () => {
    const msg = "Button Clicked";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(msg);
  });
});
