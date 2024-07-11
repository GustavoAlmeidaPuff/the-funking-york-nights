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
            let imageUrl = 'https://placeholder.co/150x100';

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
                
                <article class="article" onclick="test()" >
                    <img class="new-image-preview" src="${imageUrl}" alt="image preview">
                    <div class="text-content">
                        <h1 id="home-headline" class="headline-news-list"><a href="${article.url}" target="blank_" style="text-decoration: none; color: #000;">${article.title}</a></h1>
                        <p id="home-description" class="description-news-list"><a></a>${article.abstract}</p>
                    </div>
                </article>
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
                <a href="${mostSeen.url}">${mostSeen.abstract}<a>
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

let phrase = [
    "If there are a news site that show how people REALLY are... show me it",
    "A funkin' way to stay up-to-date",
    "A mother funkin' news site",
    `"Why The funkin york nights?"... cus i made this site listening to the fnf's OST... it's simple`
];
  
// Função para gerar um número aleatório com base no comprimento do array
function fraseAleatoria() {
    let randomIndex = Math.floor(Math.random() * phrase.length);
    return phrase[randomIndex];
}

// Exibindo a frase aleatória
console.log(fraseAleatoria())
phrase_element.innerHTML = (fraseAleatoria())

function test() {
    window.alert ('TFYN site do NOT have a read page, you will be redirected to the original new page...')
}