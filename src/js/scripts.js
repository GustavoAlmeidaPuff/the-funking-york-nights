// i have no ideia what i am doing, some of my codes in JS are GOP (GPT oriented programming)

// Sua chave de API
const apiKey = 'DxDbY6Gj5beG3WrBoVGsO01AJehXuoGI';

// Função para buscar e exibir os artigos
async function fetchArticles() {
    const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        const articles = data.results;
        
        // Seleciona o elemento onde os artigos serão exibidos
        const articlesContainer = document.getElementById('articles');
        
        // Limpa o conteúdo anterior
        articlesContainer.innerHTML = '';

        // Cria e insere elementos para cada artigo
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article');

            // Inicializa a URL da imagem com o placeholder
            let imageUrl = 'https://placeholder.co/150x100';

            // Verifica se o artigo tem mídia e se a mídia tem metadados
            if (article.media && article.media.length > 0) {
                const mediaItem = article.media.find(mediaItem => 
                    mediaItem['media-metadata'] && mediaItem['media-metadata'].some(meta => meta.format === 'mediumThreeByTwo440')
                );
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
                            <h1 id="home-headline" class="headline-news-list">${article.title}</h1>
                            <p id="home-description" class="description-news-list">${article.abstract}</p>
                        </div>
                </article>
            `;
            articlesContainer.appendChild(articleElement);
        });
    } catch (error) {
        console.error(error);
        const articlesContainer = document.getElementById('articles');
        articlesContainer.innerHTML = `<p>Erro ao buscar artigos: ${error.message}</p>`;
    }
}

// Chama a função para buscar e exibir os artigos quando a página é carregada
fetchArticles();

function test() {
    window.alert ('it is correct!!!!')
}