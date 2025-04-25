//           ----> req
// client                 server
//         res <----

/**
 * URL
 * verbs :
 *      - GET
 *      - POST
 *      - PUT
 *      - PATCH
 *      - DELETE
 *
 */

// JSON -
window.addEventListener("DOMContentLoaded", () => {
  // varriables
  const productContainer = document.querySelector(".product-container");
  const loadProducts = (products) => {
    products.forEach((prod) => {
      const prodCard = document.createElement("div");
      prodCard.className =
        "bg-white rounded flex flex-col items-center gap-3 p-3 justify-between overflow-hidden";
      const { title, image, description, price, images = [] } = prod;
      prodCard.innerHTML = `
            <div class="h-1/2">
                <img src="${
                  images.length > 0 ? images[0] : image
                }" alt="${title}"  class="h-5/6">
            </div>

            <div class="h-1/2 flex flex-col gap-3 bg-slate-50">
                 <h3 class="font-bold text-2xl text-center">${title.substr(
                   0,
                   30
                 )}</h3>
                 <p>${description.substr(0, 200)}</p>
                 <h4>Ksh. ${price}</h4>

              <button
                class="px-8 py-3 mx-2 my-4 rounded-xl bg-green-500 text-white text-xl font-black hover:text-red-300 hover:bg-green-300"
        >
                    Add to Cart
                    </button>
            </div>
            `;

      // append the card to the container
      productContainer.appendChild(prodCard);
    });
  };

  //   let products = [];
  console.log("b4 promise");
  // get all products
  //   fetch("https://fakestoreapi.com/products", {
  fetch("https://dummyjson.com/products", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // load products
      loadProducts(Array.isArray(data) ? data : data.products);
    })
    .catch((error) => {
      console.log("Error ", error.message);
    });

  console.log("after pro");
});
