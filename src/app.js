const moveTop = document.querySelector("#button");

moveTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
    });
});
