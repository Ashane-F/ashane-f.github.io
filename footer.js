const lastPushedDate = "February 13, 2026";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("last-pushed").textContent =
        "Last pushed to GitHub: " + lastPushedDate;

    document.getElementById("year").textContent =
        new Date().getFullYear();
});