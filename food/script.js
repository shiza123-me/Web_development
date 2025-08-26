const menuContainer = document.getElementById("menu-container");
const searchInput = document.getElementById("search");

const dishes = [
  { name: "Margherita Pizza", price: "$8.99", img: "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1737104576&width=800" },
  { name: "Burger Deluxe", price: "$6.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZP8ye_Mgda959J5ArbviTh6LudxQHajrvA&s" },
  { name: "Spaghetti Bolognese", price: "$9.49", img: "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg" },
  { name: "Chicken Wings", price: "$7.49", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfucytzRUIXrG9M2hQ_GBK3chHQ27YzNOimg&s" },
  { name: "Caesar Salad", price: "$5.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6emBs4NVbYfIJX66wa5MOq6d-2IOzXj2JA&s" },
  { name: "Sushi Platter", price: "$12.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78sYVWZoDXBSFzCPrp5zPKz8QGHj9J2-70g&s" },
  { name: "Paneer Tikka", price: "$8.49", img: "https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg" },
  { name: "Tandoori Chicken", price: "$10.49", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYti_ShmR0cs_P8bsco2gqXkTho2UBaguFxg&s" },
  { name: "Fried Rice", price: "$6.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhCPMXM_CPqhbsJ9QWdCWrgnPbst969fMXQ&s" },
  { name: "Cheesy Nachos", price: "$4.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1clgt-cQsDBY5PjS3f-KG9pjZ4WqjKylNjA&s" },
  { name: "Momos", price: "$5.49", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHh0vMiW1W7bBKpLKoR6miD_xQzr52iFGaqw&s" },
  { name: "Shawarma", price: "$6.99", img: "https://www.allrecipes.com/thmb/DVmGoMWgprFFt5-NLogcbs3rpZ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/52407-chicken-shawarma-VAT-001-2x1-dfb023c77cc24d57ab0e59ed8648bb0f.jpg" },
  { name: "Chow Mein", price: "$7.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZTBmQGFmi2aFZhsO3lL5YBQ_If5NOQFwGw&s" },
  { name: "Biryani", price: "$9.99", img: "https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg" },
  { name: "Ice Cream Sundae", price: "$3.99", img: "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11-500x500.jpg" },
  { name: "Brownie with Ice Cream", price: "$4.99", img: "https://i0.wp.com/www.darrycakes.com/wp-content/uploads/2017/01/1-1.jpg?fit=800%2C1200&ssl=1" },
  { name: "Spring Rolls", price: "$5.99", img: "https://www.giallozafferano.com/images/276-27601/Chinese-Spring-Rolls_1200x800.jpg" },
  { name: "Chili Paneer", price: "$6.99", img: "https://howtomakerecipes.com/wp-content/uploads/2023/01/chilli-paneer-starter-recipe1.jpg" },
  { name: "Garlic Bread", price: "$4.49", img: "https://www.spicebangla.com/wp-content/uploads/2020/12/Garlic-Bread.webp" },
  { name: "Cold Coffee", price: "$2.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HN8AiGNBnRRMXEzB8ONaK4QJoAW0zhJ49A&s" }
];

function displayMenu(items) {
  menuContainer.innerHTML = "";
  items.forEach(dish => {
    menuContainer.innerHTML += `
      <div class="menu-item">
        <img src="${dish.img}" alt="${dish.name}">
        <div class="menu-item-content">
          <h3>${dish.name}</h3>
          <p>Delicious and freshly prepared.</p>
          <span>${dish.price}</span>
        </div>
      </div>
    `;
  });
}

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  const filteredDishes = dishes.filter(d =>
    d.name.toLowerCase().includes(searchValue)
  );
  displayMenu(filteredDishes);
});

displayMenu(dishes);
