const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener('click', () => {
    document.body.classList.remove("show-mobile-menu");
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove("show-mobile-menu");
    });
});

const menuItems = [{
        id: 1,
        name: "Ribeye Steak",
        category: "steak",
        description: "A juicy, well-marbled ribeye grilled to perfection.",
        price: 429.99,
        image: "images/steak3.jpg"
    },
    {
        id: 2,
        name: "Filet Mignon",
        category: "steak",
        description: "Tender and lean, a true delicacy.",
        price: 389.99,
        image: "images/plated_steak.jpg"
    },
    {
        id: 3,
        name: "New York Strip",
        category: "steak",
        description: "A hearty, flavorful steak with a perfect balance of tenderness and flavor.",
        price: 349.99,
        image: "images/steakpotatoes.jpg"
    },
    {
        id: 4,
        name: "Sirloin Steak",
        category: "steak",
        description: "A classic cut with bold flavor.",
        price: 289.99,
        image: "images/sirloinsteak.jpg"
    },
    {
        id: 5,
        name: "Surf & Turf",
        category: "steak",
        description: "The best of both worlds.",
        price: 309.99,
        image: "images/surfturf.jpg"
    },
    {
        id: 6,
        name: "Rump Steak",
        category: "steak",
        description: "Full of flavor and perfectly cooked.",
        price: 289.99,
        image: "images/steakveg.jpg"
    },
    {
        id: 7,
        name: "Mac & Cheese",
        category: "pasta",
        description: "Rich and Creamy, baked to perfection.",
        price: 119.99,
        image: "images/macandcheese.jpg"
    },
    {
        id: 8,
        name: "Lasagne",
        category: "pasta",
        description: "Layers of savory beef, creamy béchamel, and melted cheese – baked to perfection.",
        price: 129.99,
        image: "images/lasagne.jpg"
    },
    {
        id: 9,
        name: "Spaghetti Bolognese",
        category: "pasta",
        description: "A hearty meat sauce simmered with tomatoes and herbs, served over spaghetti and topped with cheese.",
        price: 109.99,
        image: "images/spaghetti.jpg"
    },
    {
        id: 10,
        name: "Mushroom Alfredo",
        category: "pasta",
        description: "Fettuccine tossed in a creamy Alfredo sauce with sautéed mushrooms and herbs.",
        price: 99.99,
        image: "images/mushroomalfredo.jpg"
    },
    {
        id: 11,
        name: "Bone Marrow",
        category: "sides",
        description: "Rich, buttery bone marrow roasted to perfection.",
        price: 39.99,
        image: "images/bonemarrow.jpg"
    },
    {
        id: 12,
        name: "Garlic Bread",
        category: "sides",
        description: "Oven-baked loaf covered in garlic butter and melted cheese.",
        price: 39.99,
        image: "images/garlicloaf.jpg"
    },
    {
        id: 13,
        name: "Potatoe Bake",
        category: "sides",
        description: "Creamy, cheesy layers of sliced potato, bacon, and mushrooms baked until golden and bubbling.",
        price: 49.99,
        image: "images/potatoebake.jpg"
    },
    {
        id: 14,
        name: "Mozzarella Sticks",
        category: "sides",
        description: "Crispy on the outside, gooey on the inside – golden-fried mozzarella sticks served with a dipping sauce.",
        price: 49.99,
        image: "images/mozzarellasticks.jpg"
    },
    {
        id: 15,
        name: "Onion Rings",
        category: "sides",
        description: "Thick-cut onion rings coated in a crispy batter and deep-fried until golden – the ultimate crunchy snack.",
        price: 34.99,
        image: "images/onionrings.jpg"
    },
    {
        id: 16,
        name: "Fries",
        category: "sides",
        description: "Classic golden fries – crispy, salty, and endlessly satisfying",
        price: 34.99,
        image: "images/fries.jpg"
    },
    {
        id: 17,
        name: "Roasted Vegetables",
        category: "sides",
        description: "A colorful medley of seasonal vegetables, oven-roasted with herbs and olive oil for a healthy side.",
        price: 29.99,
        image: "images/roastedveg.jpg"
    },
    {
        id: 18,
        name: "Crumbed Mushrooms",
        category: "sides",
        description: "Tender button mushrooms coated in seasoned crumbs and fried until perfectly crispy.",
        price: 49.99,
        image: "images/crumbedmushrooms.jpg"
    },
    {
        id: 19,
        name: "Chocolate Brownie",
        category: "dessert",
        description: "Warm, gooey chocolate brownie served with vanilla ice cream.",
        price: 59.99,
        image: "images/dessert1.jpg"
    },
    {
        id: 20,
        name: "Crème brûlée",
        category: "dessert",
        description: "Silky-smooth vanilla custard topped with a caramelized sugar crust.",
        price: 89.99,
        image: "images/dessert3.jpg"
    },
    {
        id: 21,
        name: "Cookies & Cream Cheesecake",
        category: "dessert",
        description: "Rich, creamy cheesecake, a classic dessert with an oreo twist.",
        price: 69.99,
        image: "images/dessert2.jpg"
    },
];

const menuList = document.querySelector(".menu-list");
const categoryButtons = document.querySelectorAll(".category-button");
const sortSelect = document.getElementById("sort-select");
const orderSelect = document.getElementById("order-select");
const filterButton = document.getElementById("filter-button");

let activeCategory = "all";

function displayMenuItems(items) {
    menuList.innerHTML = "";

    items.forEach(item => {
        const itemHTML = `
            <li class="menu-item">
                <img src="${item.image}" alt="${item.name}" class="menu-image">
                <h3 class="name">${item.name}</h3>
                <p class="text">${item.description}</p>
                <span>R${item.price.toFixed(2)}</span>
            </li>
        `;
        menuList.innerHTML += itemHTML;
    });
}

function filterAndSortMenuItems() {
    const selectedCategory = activeCategory;
    const sortBy = sortSelect.value;
    const order = orderSelect.value;

    let filteredItems = selectedCategory === "all" ? [...menuItems] : menuItems.filter(item => item.category === selectedCategory);

    if (sortBy === "name") {
        filteredItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
        filteredItems.sort((a, b) => a.price - b.price);
    }

    if (order === "desc") {
        filteredItems.reverse();
    }

    displayMenuItems(filteredItems);
}

categoryButtons.forEach(button => {
    button.addEventListener("click", function () {
        categoryButtons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        activeCategory = this.dataset.category;
        filterAndSortMenuItems();
    });
});

filterButton.addEventListener("click", filterAndSortMenuItems);

displayMenuItems(menuItems);
document.querySelector('[data-category="all"]').classList.add('active');
