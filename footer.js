const lastPushedDate = "May 25, 2026";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("last-pushed").textContent =
        "Last Updated: " + lastPushedDate;

    document.getElementById("year").textContent =
        new Date().getFullYear();
});
