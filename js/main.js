const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Utilizzaimo la base dati fornita e anche il codce HTML/CSS
// - Gli oggetti nell’array di oggetti rappresentano tutti i post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
// - Stampiamo i post del nostro feed.
// - Sotto al nome NON inseire il calcolo della data (es 4 mesi fa) ma la data i formato italiano (GG/MM/AAAA)




// richiamo la funzione

stampaValori(posts);


// creo una funzione che stampa i valori dell'array

function stampaValori(nomeArray) {
    // recupero il contenitore con quary selector sulla quale appenderò gli oggetti
    const contenitore = document.getElementById("container");
    // resetto il contenitore 
    contenitore.innerHTML = "";
    // stampo con un ciclo for tutti i valori degli oggetti
    for(let valore in nomeArray){
        // destrutturo l'array
        const [post] = posts;
        // destrutturo l'oggetto
        const {author} = post;
        // destrutturo l'oggetto annidato
        const {name} = author;
        const {image} = author;
        // creo il box post 
        const boxPost = document.createElement("div");
        // aggiungo la classe post 
        boxPost.classList.add("post");
        // scrivo l'html al suo interno
        boxPost.innerHTML =
        `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${nomeArray[valore].author.image}" alt="User image">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${nomeArray[valore].author.name}</div>
                    <div class="post-meta__time">15/05/2021</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${nomeArray[valore].content}</div>
        <div class="post__image">
            <img src="${nomeArray[valore].media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${nomeArray[valore].likes}</b> persone
                </div>
            </div> 
        </div>            
    
        `;
        // appendiamo il tutto al contenitore 
        contenitore.append(boxPost);
    }
}

