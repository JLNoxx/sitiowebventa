document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const products = document.querySelectorAll(".product");
    const clearFiltersButton = document.getElementById("clear-filters");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = button.getAttribute("data-category");
            products.forEach(product => {
                product.style.display = "none";
            });
            document.querySelectorAll("." + category).forEach(product => {
                product.style.display = "block";
            });
        });
    });

    clearFiltersButton.addEventListener("click", function () {
        products.forEach(product => {
            product.style.display = "block";
        });
    });
});
