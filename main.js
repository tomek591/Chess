function hello() {
    console.log("hello word");
}
hello();

document.querySelectorAll(".square").forEach(square =>
    square.addEventListener("mouseenter", () => {
        square.classList.add("highlighting")
    }
))

document.querySelectorAll(".square").forEach(square =>
    square.addEventListener("mouseleave", () => {
            square.classList.remove("highlighting")
        }
    ))