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

const blogs = [
    {
        id:1,
        img: "./image/blog1.jpg",
        date: "March 30,2024",
        name: "Gatsby Night",
        info: "Wanna have a lit night out with friends, we got you covered. Welcome to our new Gatsby, our group deals are amazing."
    },
    {
        id:2,
        img: "./image/blog2.jpg",
        date: "March 23,2024",
        name: "Classic Dinner Night",
        info: "Having dinner together is a heavenly formality. There's no other place to be than here tonight."
    },
    {
        id:3,
        img: "./image/blog3.jpg",
        date: "March 19,2024",
        name: "New Restaurant",
        info: "Checkout our newest branch at Gampaha. We still maintain our luxurious meals with amazing taste. Welcome today."
    },
    {
        id:4,
        img: "./image/blog4.jpg",
        date: "March 15,2024",
        name: "Romantic Dinner",
        info: "Have a great time with your loved one. Come and experience the love in the air."
    },
    {
        id:5,
        img: "./image/blog5.jpg",
        date: "March 9,2024",
        name: "Brand New Kitchen",
        info: "We have a new place to prepare more amazing meals for you. No more waiting."
    }
]

const myBlogContainer = document.querySelector(".secondDiv");

window.addEventListener("DOMContentLoaded", function(){
    displayAllBlogs(blogs);
});

function displayAllBlogs(myblogs){
    let allBlogs = myblogs.map(function(item){
        return `<div class="myb-items">
        <img src=${item.img} class="pic1">
        <div id="info">
            <h3>${item.date}</h3>
            <h2>${item.name}</h2>
            <p>${item.info}</p>
        </div>
    </div>`;
    });
    allBlogs = allBlogs.join("");
    myBlogContainer.innerHTML = allBlogs;
}