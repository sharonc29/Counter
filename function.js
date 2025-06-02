const body = document.getElementById("body");
const themeDropdown = document.getElementById("change-theme");

const resetButton = document.getElementById("reset-button");
const incrementButton = document.getElementById("increment-button");
const decrementButton = document.getElementById("decrement-button");
const counterElement = document.getElementById("counter-value");

let counterValue = 0;

function updateCounter() {
    counterElement.textContent = counterValue;
}

function incrementCounter() {
    counterValue++;
    updateCounter();
}

function decrementCounter() {
    counterValue--;
    updateCounter();
}

function resetCounter() {
    counterValue = 0;
    updateCounter();
}


incrementButton.addEventListener("click", incrementCounter);
decrementButton.addEventListener("click", decrementCounter);
resetButton.addEventListener("click", resetCounter);

//  Theme switching logic
themeDropdown.addEventListener("change", function () {
    if (themeDropdown.value === "light") {
        body.classList.add("light-theme");
    } else {
        body.classList.remove("light-theme");
    }
});

// arrow keys support
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            incrementCounter();
            break;
        case "ArrowDown": // <- corrected case
            decrementCounter();
            break;
    }
});
