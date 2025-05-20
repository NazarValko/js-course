document.addEventListener("DOMContentLoaded", function () {
    const categoryContainer = document.getElementById("category-links");
    const productContainer = document.getElementById("product-list");
  
    function displayCategory(shortname) {
      productContainer.innerHTML = "";
  
      fetch(shortname + ".json")
        .then(res => res.json())
        .then(data => {
          const category = data.category;
          const items = data.items;
  
          const title = document.createElement("h2");
          title.textContent = "Категорія: " + category.name;
          productContainer.appendChild(title);
  
          if (category.notes) {
            const notes = document.createElement("p");
            notes.innerHTML = "<em>" + category.notes + "</em>";
            productContainer.appendChild(notes);
          }
  
          items.forEach(item => {
            const block = document.createElement("div");
            block.style.border = "1px solid #ccc";
            block.style.padding = "10px";
            block.style.marginBottom = "15px";
            block.style.maxWidth = "400px";
  
            block.innerHTML =
              "<img src='" + item.image + "' alt='" + item.name + "' width='200' height='200'><br>" +
              "<h3>" + item.name + "</h3>" +
              "<p>" + item.description + "</p>" +
              "<p><strong>Ціна: " + item.price + "</strong></p>";
  
            productContainer.appendChild(block);
          });
        })
        .catch(err => {
          productContainer.innerHTML = "<p>Помилка завантаження категорії.</p>";
          console.error("Помилка при завантаженні категорії:", err);
        });
    }
  
    function loadCatalog() {
      categoryContainer.innerHTML = "";
      productContainer.innerHTML = "";
  
      fetch("categories.json")
        .then(res => res.json())
        .then(categories => {
          categories.forEach(cat => {
            const link = document.createElement("a");
            link.href = "#";
            link.textContent = cat.name;
            link.style.marginRight = "15px";
            link.onclick = () => displayCategory(cat.shortname);
            categoryContainer.appendChild(link);
          });
  
          const specialLink = document.createElement("a");
          specialLink.href = "#";
          specialLink.textContent = "Specials";
          specialLink.style.marginLeft = "30px";
          specialLink.onclick = () => {
            const randomIndex = Math.floor(Math.random() * categories.length);
            displayCategory(categories[randomIndex].shortname);
          };
          categoryContainer.appendChild(specialLink);
        });
    }
  
    document.getElementById("home-link").onclick = () => location.reload();
    document.getElementById("catalog-link").onclick = () => loadCatalog();
  
    loadCatalog();
  });
  