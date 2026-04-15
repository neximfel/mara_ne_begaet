const tovari = [
    {
        tovar_img: 'images/sec1/image1.png',
        tovar_name: 'Spaghetti',
        tovar_stars: 'images/sec1/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec1/image2.png',
        tovar_name: 'Linguine',
        tovar_stars: 'images/sec1/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec1/image3.png',
        tovar_name: 'Capellini',
        tovar_stars: 'images/sec1/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec1/image4.png',
        tovar_name: 'Fettuccine',
        tovar_stars: 'images/sec1/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec1/image5.png',
        tovar_name: 'Bucatini',
        tovar_stars: 'images/sec1/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec1/image6.png',
        tovar_name: 'Tortellini',
        tovar_stars: 'images/sec1/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec1/image7.png',
        tovar_name: 'Fusilli',
        tovar_stars: 'images/sec1/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec1/image8.png',
        tovar_name: 'Farfalle',
        tovar_stars: 'images/sec1/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec1/image9.png',
        tovar_name: 'Penne Alla Vodak',
        tovar_stars: 'images/sec1/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    }
]
const tovariDiv = document.getElementById('sec1_medok');

tovariDiv.innerHTML = tovari.map(
   item => `<div class="sec1_art">
                <div class="sec1_art_top">
                    <div class="sec1_art_top_img1">
                        <img src="${item.tovar_img}">
                    </div>
                    <h3>${item.tovar_name}</h3>
                    <div class="sec1_art_top_img2">
                        <img src="${item.tovar_stars}">
                    </div>
                    <p>${item.tovar_desc}</p>
                </div>
                <div class="sec1_art_bot">
                    <p>${item.tovar_sum}</p>
                    <button>${item.tovar_button}</button>
                </div>
            </div>`,
   ).join('');


const pizzas = [
    {
        pizza_img: 'images/sec1/pizza/pizza1.png',
        pizza_name: 'Splitza Signature',
        pizza_stars: 'images/sec1/rating.svg',
        pizza_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        pizza_sum: '$12.05',
        pizza_button: 'Order now',
    },
    {
        pizza_img: 'images/sec1/pizza/pizza2.png',
        pizza_name: 'Super Supreme',
        pizza_stars: 'images/sec1/rating.svg',
        pizza_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        pizza_sum: '$12.05',
        pizza_button: 'Order now',
    },
    {
        pizza_img: 'images/sec1/pizza/pizza3.png',
        pizza_img: 'images/sec1/pizza/pizza1.png',
        pizza_name: 'Veggie Garden',
        pizza_stars: 'images/sec1/rating.svg',
        pizza_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        pizza_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        pizza_img: 'images/sec1/pizza/pizza4.png',
        pizza_name: 'Double Beef Burger',
        pizza_stars: 'images/sec1/rating.svg',
        pizza_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        pizza_sum: '$12.05',
        pizza_button: 'Order now',
    },
    {
        pizza_img: 'images/sec1/pizza/pizza5.png',
        pizza_name: 'Meat Lovers',
        pizza_stars: 'images/sec1/rating.svg',
        pizza_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        pizza_sum: '$12.05',
        pizza_button: 'Order now',
    },
    {
        pizza_img: 'images/sec1/pizza/pizza6.png',
        pizza_name: 'Extravaganzza',
        pizza_stars: 'images/sec1/rating.svg',
        pizza_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        pizza_sum: '$12.05',
        pizza_button: 'Order now',
    },
    {
        pizza_img: 'images/sec1/pizza/pizza7.png',
        pizza_name: 'Meat & Meat',
        pizza_stars: 'images/sec1/rating.svg',
        pizza_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        pizza_sum: '$12.05',
        pizza_button: 'Order now',
    },
    {
        pizza_img: 'images/sec1/pizza/pizza8.png',
        pizza_name: 'Meatzza',
        pizza_stars: 'images/sec1/rating.svg',
        pizza_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        pizza_sum: '$12.05',
        pizza_button: 'Order now',
    },
    {
        pizza_img: 'images/sec1/pizza/pizza9.png',
        pizza_name: 'Tuna Delight',
        pizza_stars: 'images/sec1/rating.svg',
        pizza_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat',
        pizza_sum: '$12.05',
        pizza_button: 'Order now',
    }
]
const pizzasDiv = document.getElementById('sec1_medok2');

pizzasDiv.innerHTML = pizzas.map(
   item => `<div class="sec1_art">
                <div class="sec1_art_top">
                    <div class="sec1_art_top_img1">
                        <img src="${item.pizza_img}">
                    </div>
                    <h3>${item.pizza_name}</h3>
                    <div class="sec1_art_top_img2">
                        <img src="${item.pizza_stars}">
                    </div>
                    <p>${item.pizza_desc}</p>
                </div>
                <div class="sec1_art_bot">
                    <p>${item.pizza_sum}</p>
                    <button>${item.pizza_button}</button>
                </div>
            </div>`,
   ).join('');