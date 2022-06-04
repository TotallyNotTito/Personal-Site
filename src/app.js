const moveTop = document.querySelector("#button");

moveTop.addEventListener("click", () => {
    window.scrollTo({
        top: 150,
        left: 150,
    });
});
