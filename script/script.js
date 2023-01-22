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


const genres = [];



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

        if ( !i.classList.contains('active')) {
            i.classList.add('active')
            sum.textContent++;
        } else {
            i.classList.remove('active');
            sum.innerHTML--;
        }
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
    console.log(genre, a);

    left_nav.appendChild(a);
    left_bar.appendChild(left_nav);
})