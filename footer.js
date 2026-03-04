const lastPushedDate = "March 04, 2026";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("last-pushed").textContent =
        "Last updated: " + lastPushedDate;

    document.getElementById("year").textContent =
        new Date().getFullYear();
});
