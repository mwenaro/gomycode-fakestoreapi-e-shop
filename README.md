# FAKESTOREAPI E-SHOP

An interactive **e-commerce frontend application** built with **HTML, CSS, and vanilla JavaScript** that consumes the public **FakeStoreAPI** for product data. This project showcases dynamic UI rendering, API integration using `fetch()`, product listing, and basic shopping interactions — all without a backend server.

---

## 🚀 Live Demo

*(Add your deployed URL here if available)*

---

## 📌 Features

* Fetches real-like product data from **FakeStoreAPI** using JavaScript `fetch()` calls. ([GitHub][1])
* Displays a list of products with images, titles, categories, and prices.
* Responsive layout with semantic HTML and modular CSS.
* Interactive UI elements (e.g., hover effects, buttons).
* Designed as a beginner-friendly e-shop frontend project.

---

## 📦 Table of Contents

1. [Installation](#-installation)
2. [Usage](#-usage)
3. [Project Structure](#-project-structure)
4. [API Reference](#-api-reference)
5. [Contributing](#-contributing)
6. [License](#-license)

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/mwenaro/gomycode-fakestoreapi-e-shop.git
```

Open the project in your browser:

```bash
cd gomycode-fakestoreapi-e-shop
# simply open index.html in your browser
open index.html
```

No package managers or build steps required — just plain frontend files.

---

## ▶️ Usage

1. Launch the app in a browser.
2. The homepage fetches and displays products from the **FakeStoreAPI**.
3. Browse products by category or scroll through all items.
4. (Optional) Further UI enhancements can include search, cart functionality, and filters.

---

## 📁 Project Structure

```text
gomycode-fakestoreapi-e-shop/
├── assets/
│   └── css/                # Stylesheets
│   └── js/                 # JavaScript modules
├── index.html              # Main application landing page
├── README.md               # Project documentation
```

---

## 🔗 API Reference

This project uses the **FakeStoreAPI** — a free REST API that returns JSON e-commerce data including products, categories, carts, and users. ([GitHub][1])

Commonly used endpoints:

| Purpose                  | Endpoint                        |
| ------------------------ | ------------------------------- |
| Get all products         | `/products`                     |
| Get single product by ID | `/products/{id}`                |
| Get products by category | `/products/category/{category}` |
| (Optional) sort/limit    | `/products?limit=5&sort=desc`   |

Example JavaScript fetch:

```js
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🤝 Contributing

Contributions are welcome! Here’s how to get started:

1. **Fork** the repository
2. Create a **feature branch**:

   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Commit** your changes
4. **Push** to your branch
5. Open a **Pull Request**

Please follow consistent code style and include clear commit messages.

---

## 📄 License

This project is available under the **MIT License** — see the `LICENSE` file for details.

---

## 🙏 Acknowledgements

* **FakeStoreAPI** for providing a free, easy-to-use JSON API for e-commerce prototypes. ([gitstar-ranking.com][2])
* GOMYCODE community for the learning opportunity.



