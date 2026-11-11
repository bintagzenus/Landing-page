let cart = [];
let cartCount = 0;

function formatRupiah(angka) {
    return "Rp " + Number(angka).toLocaleString("id-ID");
}

function addToCart(name, price) {
    cart.push({name, price});
    cartCount++;

    const badge = document.getElementById("cart-count");
    badge.innerText = cartCount;
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");

    renderCart();
}

function renderCart() {
    let list = document.getElementById("cart-items");
    list.innerHTML = "";

    cart.forEach((item, index) => {
        list.innerHTML += `<li><span>${index + 1}. ${item.name}</span><span>${formatRupiah(item.price)}</span></li>`;
    });
}

function toggleCart() {
    document.getElementById("cartBox").classList.toggle("active");
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang belanja kosong!");
        return;
    }

    console.log("DATA CART:", cart);
    alert("Terima kasih telah berbelanja!");

    cart = [];
    cartCount = 0;

    document.getElementById("cart-count").innerText = 0;
    renderCart();
}
