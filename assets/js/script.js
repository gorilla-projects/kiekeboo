

// show cart

(function () {
    cartInfo = document.querySelector("#basket");
    cart = document.querySelector("#cart");

    cartInfo.addEventListener("click", function (event) {
        cart.classList.toggle("show-cart")
    })
})();

(function () {

    btnItem = document.querySelectorAll(".buttonItem");

    btnItem.forEach(function (btnItem) {
        btnItem.addEventListener("click", function (event) {

            const item = {};
            let posName = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            item.name = posName;
            let posPrice = event.target.parentElement.previousElementSibling.textContent;
            let price = posPrice.slice(1).trim();
            item.price = price;


            cartItem = document.createElement("div");

            cartItem.classList.add(
                "cart-item",
                "d-flex",
                "justify-content-between",
                "text-capitalize",
                "my-3"


            )

            cartItem.innerHTML = `
                <img src="" class="img-fluid rounded-circle" id="item-img" alt="">
                <div class="item-text">

                <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                <span>€</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                <i class="fas fa-trash"></i>
                </a>
                </div>`;

            cart = document.querySelector("#cart");
            cartTotal = document.querySelector(".cart-total-container");

            cart.insertBefore(cartItem, cartTotal)
            alert(`U hebt ${item.name} aan uw mandje toegevoed`)

            showTotal()






        })
    })

    function showTotal() {

        const allPrices = [];
        const prices = document.querySelectorAll(".cart-item-price");

        prices.forEach(function (prices) {
            allPrices.push(parseFloat(prices.textContent))


            const totalMoney = allPrices.reduce(function (allPrices, prices) {
                allPrices += prices;
                return allPrices
            }, 0)

            console.log(typeof totalMoney);

            let FinalMoney = totalMoney.toFixed(2).trim();

            document.querySelector("#cart-total").textContent = FinalMoney;


        })







    }

})();

