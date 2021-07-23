const menu = [
    {
        id: 1,
        title: "Egg salad",
        category: "breakfast",
        price: 15.99,
        img: "./images/item1.jfif",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "lunch soup",
        category: "lunch",
        price: 13.99,
        img: "./images/item2.jfif",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla salmon",
        category: "breakfast",
        price: 6.99,
        img: "./images/item3.jfif",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Sanwitch delight",
        category: "shakes",
        price: 20.99,
        img: "./images/item4.jfif",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "Icream attack",
        category: "shakes",
        price: 22.99,
        img: "./images/item5.jfif",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Carrot dream",
        category: "breakfast",
        price: 18.99,
        img: "./images/item6.jfif",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Burger overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item7.jfif",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "Icream classic",
        category: "shakes",
        price: 12.99,
        img: "./images/item8.jfif",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "BBQ buddy",
        category: "lunch",
        price: 16.99,
        img: "./images/item9.jfif",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];


const mainContent = document.querySelector('.main-content');

const buttonBox = document.querySelector('.button-box');

// load items
window.addEventListener('DOMContentLoaded', function (e) {
    displayMenuItems(menu);
    displayMenuButtons();
    
});


function displayMenuItems(menu) {
    let displayMenu = menu.map(function (item) {
        return `<article class="menu-item">
                    <img class="photo" src="${item.img}"
                        alt="${item.title}">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text">
                            ${item.desc}
                        </p>
                    </div>
                </article>`
    });
    displayMenu = displayMenu.join('');
    mainContent.innerHTML = displayMenu;
}


function displayMenuButtons(){
    // create unique categories
    const categories = menu.reduce(function (value, item) {
        if (!value.includes(item.category)) {
            value.push(item.category);
        }
        return value;
    }, ['all']);
    console.log(categories);

    // create categories button
    const categotyBtns = categories.map(function(category){
        return `<button class="btn" data-id="${category}">${category}</button>`
    }).join('');

    buttonBox.innerHTML = categotyBtns;

    const filterBtns = document.querySelectorAll('.btn');
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const category = e.target.dataset.id;
            const menuCategory = menu.filter(function(item){
                if (category === 'all'){
                    return item;
                }
                return item.category === category;
            });
            displayMenuItems(menuCategory);
        });
    });
}