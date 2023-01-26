let games = [
    {
        id: 1,
        name: 'Coll Of duty',
        genre: 'Action',
        price: '$ 35',
        img: './photo/col of duty2.webp',
    },
    {
        id: 2,
        name: 'Need for speed',
        genre: 'Racing',
        price: '$ 48',
        img: './photo/NFS-Most-Wanted.jpg',
    },
    {
        id: 3,
        name: 'PUBG',
        genre: 'Battlegrounds',
        price: '$ 30',
        img: './photo/pubg.jpg',
    },
    {
        id: 4,
        name: "Assassin's creed",
        genre: 'Action',
        price: '$ 55',
        img: './photo/assassins.webp',
    },
    {
        id: 5,
        name: 'Motal Combat',
        genre: 'Fighting',
        price: '$ 35',
        img: './photo/mortal-kombat.jpg',
    },
    {
        id: 6,
        name: 'Counter Strike',
        genre: 'Shooter',
        price: '$ 35',
        img: './photo/CS-S_Box.jpg',
    },
    {
        id: 7,
        name: 'Forza',
        genre: 'Racing',
        price: '$ 35',
        img: './photo/forza1.jpg',
    }
];



const content = document.querySelector('.content');
const sum = document.querySelector('#sum');
const left_bar = document.querySelector('.left-bar');
const left_nav = document.querySelector('.left-nav');
const nav_bar = document.querySelector('.nav-bar');
const burger = document.querySelector('.burger');
const basket = document.querySelector('#basket');
const basketBox = document.querySelector('.basketBox');

burger.addEventListener('click', addNav);
basket.addEventListener('click', showBasket);

document.addEventListener('DOMContentLoaded', loadFile)

const genres = [];
let basketArr = [];


function loadFile() {
    basketArr.push(JSON.parse(localStorage.getItem('game')));
}

///
function addNav() {
    nav_bar.classList.toggle('open');
    burger.classList.toggle('close');
}
///
games.forEach(function (game) {
    const card = document.createElement('div');
    const item = document.createElement('div');
    const btn = document.createElement('button');
    const img = document.createElement('img');
    const title = document.createElement('p');


    if(!genres.includes(game.genre)) {
        genres.push(game.genre)
    }
        


    img.classList.add('gameImg');
    item.classList.add('item');
    card.classList.add('card');
    title.classList.add('title');
    btn.classList.add('btn-bay');


    img.src = game.img;
    btn.textContent = game.price;
    title.textContent = game.name;

    btn.addEventListener('click', buyGame);
     

    function buyGame(event) {

        const i = event.target;
        let index = games.indexOf(game);

        if ( !i.classList.contains('active')) {
            i.classList.add('active')
            sum.textContent++;
            basketArr.push(game);
        } else {
            i.classList.remove('active');
            sum.innerHTML--;
            basketArr.splice(index, 1);
        }
        localStorage.setItem('game', JSON.stringify(basketArr));
    }
 

    item.append(btn, img, title);
    card.appendChild(item);
    content.appendChild(card);
});

genres.forEach(function(genre) {
    const a = document.createElement('a');

    a.href = ('#');
    a.textContent = genre;
    a.tytle = genre;

    left_nav.appendChild(a);
    left_bar.appendChild(left_nav);
});


function showBasket() {


        basketArr.forEach(function(game) {
            if(!basketBox.classList.contains('show')) {
    
                basketBox.classList.add('show');
    
                const card = document.createElement('div');
                const item = document.createElement('div');
                const img = document.createElement('img');
                const title = document.createElement('p');
    
                img.classList.add('basketImg');
                item.classList.add('basketItem');
                card.classList.add('basketCard');
                title.classList.add('basketTitle');
        
                img.src = game.img;
                title.textContent =  `${game.name}   -  ${game.genre}  `;
                
                item.appendChild( img);
                card.append(item, title);
                basketBox.appendChild(card);
        
            } else {
                basketBox.classList.remove('show');
            }
        }) 
    }
    