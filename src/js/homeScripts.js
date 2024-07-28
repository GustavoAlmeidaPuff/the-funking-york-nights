// i have no ideia what i am doing, some of my codes in JS are GOP (GPT oriented programming)

// my api key
const apiKey = 'DxDbY6Gj5beG3WrBoVGsO01AJehXuoGI';

// Function to search and display articles
async function fetchArticles() {
    const url1 = `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${apiKey}`;
    const url2 = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`;

    try {
        const response = await fetch(url1);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`)
        }
        const data = await response.json()
        const articles = data.results
        
        // Select the element where the articles will be displayed
        const articlesContainer = document.getElementById('articles')
        
        // Clear previous content
        articlesContainer.innerHTML = ''

        // Create and insert elements for each article
        articles.forEach(article => {
            const articleElement = document.createElement('div')
            articleElement.classList.add('article')

            // Initialize the image URL with the placeholder
            let imageUrl = 'https://via.placeholder.com/150x100?text=Not+found?...+i+think';

            // Checks if the article has media and if the media has metadata
            if (article.media && article.media.length > 0) {
                const mediaItem = article.media.find(mediaItem => 
                    mediaItem['media-metadata'] && mediaItem['media-metadata'].some(meta => meta.format === 'mediumThreeByTwo440')
                )
                if (mediaItem) {
                    const mediaMeta = mediaItem['media-metadata'].find(meta => meta.format === 'mediumThreeByTwo440');
                    if (mediaMeta && mediaMeta.url) {
                        imageUrl = mediaMeta.url;
                    }
                }
            }

            articleElement.innerHTML = `
                
                <div href="${article.url}" class="article-container" onclick="message()" >
                    <img class="new-image-preview" src="${imageUrl}" alt="image preview">
                    <div class="text-content">
                        <h1 id="home-headline" class="headline-news-list"><a href="${article.url}" target="blank_" >${article.title}</a></h1>
                        <p id="home-description" class="description-news-list"><a target="blank_" href="${article.url}">${article.abstract}</a></p>
                        <p class="home-artilce-subject">${article.section}</P>
                    </div>
                </div>
            `
            articlesContainer.appendChild(articleElement);


        });
    } catch (error) {
        console.error(error);
        const articlesContainer = document.getElementById('articles');
        articlesContainer.innerHTML = `<p>Erro ao buscar artigos: ${error.message}</p>`;
    }


    //fetch most-seen 
    try {
        const response = await fetch(url2);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        const mostSeen = data.results;

        // Select the element where the items will be displayed
        const mostSeenContainer = document.getElementById('most-seen');
        
        // Clear previous content
        mostSeenContainer.innerHTML = '';

        // Create and insert elements for each item
        mostSeen.forEach( mostSeen => {
            const mostSeenElement = document.createElement('li')
            mostSeenElement.classList.add('most-seen-link')


            mostSeenElement.innerHTML = `
                <a class='most-seen-item' target="blank_" href="${mostSeen.url}">${mostSeen.title}<a>
            `

            mostSeenContainer.appendChild(mostSeenElement);
        })
    }  catch (error) {

    }
}
// Calls the function to fetch and display the articles when the page loads
fetchArticles();


//the random sentece code
let phrase_element = document.getElementById('sentence')
phrase_element.innerHTML = "placeholder"
phrase_element.style.backgroundColor = "rgba(51, 51, 51, 0)"

let phrase = [
    "•If there are a news site that show how people REALLY are... show me it",
    "•SICK!!",
    "•A funkin' way to stay up-to-date",
    "•Left, right, up, or down??",
    "•A mother funkin' news site",
    `•"Why The funkin york nights?"... cus i made this site listening to the fnf's OST... it's simple`
];

// Função para gerar um número aleatório com base no comprimento do array
function randomPhrase() {
    let randomIndex = Math.floor(Math.random() * phrase.length);
    return phrase[randomIndex];
}

// Exibindo a frase aleatória
console.log(randomPhrase())
phrase_element.innerHTML = (randomPhrase())

messageShows = 0
function message() {
    if (messageShows < 1) {
        window.alert ('TFYN site do NOT have a read page yet, you will be redirected to the original news page...')
        messageShows++
    }
}

//square AD
const images = [
    "./assets/images/advertisement/durexAD1.png",
    "./assets/images/advertisement/durexAD2.png",
    "./assets/images/advertisement/matrixTrump.png"
];

// Função para escolher uma imagem aleatória distinta
function getRandomImage(excludeImages = []) {
    let filteredImages = images.filter(img => !excludeImages.includes(img));
    const randomIndex = Math.floor(Math.random() * filteredImages.length);
    return filteredImages[randomIndex];
}

// Seleciona os elementos de imagem
const imgElement1 = document.querySelector('.random-square-ad');
const imgElement2 = document.querySelector('.random-square-ad-2');

// Define o src para imagens aleatórias distintas
const firstImage = getRandomImage();
const secondImage = getRandomImage([firstImage]);

imgElement1.src = firstImage;
imgElement2.src = secondImage;

function Cstrike() {
    let html = document.querySelector('body')

    setTimeout(() => {
        html.innerHTML = `<img id="Cstrike" src="./assets/images/bug.png">
        <br>
        <p style="font-size: 7em; font-family: 'funkin font', Arial, Helvetica, sans-serif ;letter-spacing: 6px; -webkit-text-stroke: 10px transparent; ">just joking... you just found a "easter egg", you can return now by pressing... <p style="font-size: 12em; font-familly: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">"f5"</p></p>`
    }, 2500);
    html.innerHTML = `<div class="loading-container"><img id="loading" src="./assets/images/loading.gif"></div>`
}