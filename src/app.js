const move = document.querySelector("#button");

move.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    console.log("No Post Method Setup Yet");
});
