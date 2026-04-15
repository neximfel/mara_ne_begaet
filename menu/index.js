const tovari = [
    {
        tovar_img: 'images/sec3/image1.png',
        tovar_name: 'Spaghetti',
        tovar_stars: 'images/sec3/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec3/image2.png',
        tovar_name: 'Gnocchi',
        tovar_stars: 'images/sec3/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec3/image3.png',
        tovar_name: 'Rovioli',
        tovar_stars: 'images/sec3/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec3/image4.png',
        tovar_name: 'Penne Alla Vodak',
        tovar_stars: 'images/sec3/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec3/image5.png',
        tovar_name: 'Risoto',
        tovar_stars: 'images/sec3/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    },
    {
        tovar_img: 'images/sec3/image6.png',
        tovar_name: 'Splitza Signature',
        tovar_stars: 'images/sec3/rating.svg',
        tovar_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ',
        tovar_sum: '$12.05',
        tovar_button: 'Order now',
    }
]
const tovariDiv = document.getElementById('sec3_medok');

tovariDiv.innerHTML = tovari.map(
   item => `<div class="sec3_art">
                <div class="sec3_art_top">
                    <img src="${item.tovar_img}">
                    <h3>${item.tovar_name}</h3>
                    <img src="${item.tovar_stars}">
                    <p>${item.tovar_desc}</p>
                </div>
                <div class="sec3_art_bot">
                    <p>${item.tovar_sum}</p>
                    <a href="../order/index.html"><button>${item.tovar_button}</button></a>
                </div>
            </div>`,
   ).join('');