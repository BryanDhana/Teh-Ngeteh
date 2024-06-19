document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#hamburger-menu");
  const searchForm = document.querySelector(".search-form");
  const searchButton = document.querySelector("#search-button");
  const searchBox = document.querySelector("#search-box");
  const shoppingCartButton = document.querySelector("#shopping-cart-button");
  const shoppingCart = document.querySelector(".shopping-cart");

  // Toggle 'active' class when hamburger menu is clicked
  hamburger.onclick = () => {
    navbarNav.classList.toggle("active");
    // Close search form if open
    if (searchForm.classList.contains("active")) {
      searchForm.classList.remove("active");
    }
    // Close shopping cart if open
    if (shoppingCart.classList.contains("active")) {
      shoppingCart.classList.remove("active");
    }
  };

  // Toggle 'active' class when search button is clicked
  searchButton.onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
    // Close navbar if open
    if (navbarNav.classList.contains("active")) {
      navbarNav.classList.remove("active");
    }
    // Close shopping cart if open
    if (shoppingCart.classList.contains("active")) {
      shoppingCart.classList.remove("active");
    }
  };

  // Toggle 'active' class when shopping cart button is clicked
  shoppingCartButton.onclick = () => {
    shoppingCart.classList.toggle("active");
    // Close navbar if open
    if (navbarNav.classList.contains("active")) {
      navbarNav.classList.remove("active");
    }
    // Close search form if open
    if (searchForm.classList.contains("active")) {
      searchForm.classList.remove("active");
    }
  };

  // Close nav, search form, and shopping cart when clicking outside
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove("active");
    }
    if (
      !shoppingCartButton.contains(e.target) &&
      !shoppingCart.contains(e.target)
    ) {
      shoppingCart.classList.remove("active");
    }
  });
});

//Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

//Klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
