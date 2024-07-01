// i have no ideia what i am doing, some of my codes in JS are GOP (GPT oriented programming)

// Sua chave de API
const apiKey = 'DxDbY6Gj5beG3WrBoVGsO01AJehXuoGI';

// Função para buscar e exibir os artigos
async function fetchArticles() {
    const period = document.getElementById('period').value;
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
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.abstract}</p>
                <a href="${article.url}" target="_blank">Read more</a>
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
