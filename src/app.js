const moveTop = document.querySelector("#main-content");

moveTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
