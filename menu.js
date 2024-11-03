//sidebar
const cartBtn = document.querySelector('.mycart');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

cartBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});

const starters =[
    {
        id:1,
        name: "Tomato Soup",
        img: "./images/6324bdfe0ebb94925875d95f_menu-tomato-toast.webp",
        info: "Just Delicious!!",
        price: "Rs 150"
    },
    {
        id: 2,
        name: "Noodle Soup",
        img: "./images/6324bdfe3f4c8b7cc88b25f7_menu-noodle-soup.webp",
        info: "Golden taste ever",
        price: "Rs 200"
    },
    {
        id:3, 
        name: "Pumpkin Soup",
        img: "./images/6324bdfeaccfb04b0713ee16_menu-pumpkin-soup.webp",
        info: "Speak of health!",
        price: "Rs 100"
    }
]

const breakFast = [
    {
        id:1,
        name: "pasta",
        img: "./image/foodimage2.jpg",
        info: "How to start your day",
        price: "Rs 300"
    },
    {
        id:2,
        name: " Acai Bowls",
        img: "./image/foodimage5.jpg",
        info: "The heavenly feeling",
        price: "Rs 250"
    },
    {
        id:3,
        name: "Quinoa Bowls",
        img: "./image/foodimage6.jpg",
        info: "Just Delicious",
        price: "Rs 200"
    },
    {
        id:4,
        name: "Avocado Toast",
        img: "./image/foodimage3.jpg",
        info: "Health comes first",
        price: "Rs 350"
    }
]

const lunch = [
    {
        id:1,
        name: "Italian Pizza",
        img: "./image/foodimage1.avif",
        info: "Share the love",
        price: "Rs 500"
    },
    {
        id:2,
        name: "Vegan Burger",
        img: "./image/foodimage9.jpg",
        info: "Yummy Yummy!!",
        price: "Rs 350"
    },
    {
        id:3,
        name: "Sushi Burritos",
        img: "./image/foodimage4.jpg",
        info: "Just Delicious!!",
        price: "Rs 350"
    },
    {
        id:4,
        name: "Laksa",
        img: "./image/foodimage8.jpg",
        info: "Health comes first",
        price: "Rs 400"
    }
]

const drinks = [
    {
        id:1,
        name: "Coffe",
        img: "./image/drinkimage1.jpg",
        info: "Taste of greatness",
        price: "Rs 200"
    },
    {
        id:2,
        name: "milk",
        img: "./image/drinkimage2.jpg",
        info: "Refreshing!!",
        price: "Rs 250"
    },
    {
        id:3,
        name: "Vegetable Juices",
        img: "./image/drinkimmage3.jpg",
        info: "Just wow!!",
        price: "Rs 200"
    }
]

const myItemsContainer = document.querySelector(".starters");
const myBfastContainer = document.querySelector('.bfast');
const myLunchContainer = document.querySelector(".lunch");
const myDrinksContainer = document.querySelector(".drinks");

window.addEventListener("DOMContentLoaded", function(){
    displayMyStarters(starters);
    displayMyBfast(breakFast);
    displayMyLunch(lunch);
    displayMyDrinks(drinks);
});
//starters
function displayMyStarters(menuItems){
    let displayStarter = menuItems.map(function(item){
        return `<div class="my-items">
        <img src=${item.img} class="mypic"/>
        <div>
            <h3>${item.name}</h3>
            <p>${item.info}</p>
            <button class="add-cart">Add to cart</button>
        </div>
        <p>${item.price}</p>
    </div>`;
    });
    displayStarter = displayStarter.join("");
    myItemsContainer.innerHTML = displayStarter;
}
//breakfast
function displayMyBfast(bMenu){
    let displayBreakfast = bMenu.map(function(item){
        return `<div class="my-b-items">
        <img src=${item.img} class="mypic"/>
        <div>
            <h3>${item.name}</h3>
            <p>${item.info}</p>
            <button class="add-cart">Add to cart</button>
        </div>
        <p>${item.price}</p>
    </div>`;
    });
    displayBreakfast = displayBreakfast.join("");
    myBfastContainer.innerHTML = displayBreakfast;
}
//lunch
function displayMyLunch(lmenu){
    let displayLunch = lmenu.map(function(item){
        return `<div class="my-l-items">
        <img src=${item.img} class="mypic"/>
        <div>
            <h3>${item.name}</h3>
            <p>${item.info}</p>
            <button class="add-cart">Add to cart</button>
        </div>
        <p>${item.price}</p>
    </div>`;
    });
    displayLunch = displayLunch.join("");
    myLunchContainer.innerHTML = displayLunch;
}
//drinks
function displayMyDrinks(dmenu){
    let displayDrinks = dmenu.map(function(item){
        return `<div class="my-d-items">
        <img src=${item.img} class="mypic"/>
        <div>
            <h3>${item.name}</h3>
            <p>${item.info}</p>
            <button class="add-cart">Add to cart</button>
        </div>
        <p>${item.price}</p>
    </div>`;
    });
    displayDrinks = displayDrinks.join("");
    myDrinksContainer.innerHTML = displayDrinks;
}
