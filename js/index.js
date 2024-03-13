// Lấy các biểu tượng và thanh tìm kiếm, giỏ hàng, và panel người dùng
const searchIcon = document.getElementById("searchIcon");
const cartIcon = document.getElementById("cartIcon");
const userIcon = document.getElementById("userIcon");
const searchBar = document.getElementById("searchBar");
const cart = document.getElementById("cart");
const userPanel = document.getElementById("userPanel");

// Hiển thị thanh tìm kiếm khi di chuột qua biểu tượng tìm kiếm
searchIcon.addEventListener("mouseenter", function () {
    searchBar.classList.remove("hidden");
});

// Ẩn thanh tìm kiếm khi di chuột ra khỏi biểu tượng tìm kiếm
searchIcon.addEventListener("mouseleave", function () {
    searchBar.classList.add("hidden");
});

// Hiển thị giỏ hàng khi di chuột qua biểu tượng giỏ hàng
cartIcon.addEventListener("mouseenter", function () {
    cart.classList.remove("hidden");
});

// Ẩn giỏ hàng khi di chuột ra khỏi biểu tượng giỏ hàng
cartIcon.addEventListener("mouseleave", function () {
    cart.classList.add("hidden");
});

// Hiển thị panel người dùng khi click vào biểu tượng người dùng
userIcon.addEventListener("click", function () {
    userPanel.classList.toggle("hidden");
});
