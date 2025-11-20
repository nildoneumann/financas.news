const container = document.getElementById("news-container");

async function carregarNoticias() {
  const url = `https://gnews.io/api/v1/search?q=finanças&lang=pt&max=10&token=161da9588ee14b76a404bd652af8b9dc`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log(dados);

    container.innerHTML = "";

    if (!dados.articles || dados.articles.length === 0) {
      container.innerHTML = "<p>Nenhuma notícia encontrada.</p>";
      return;
    }

    dados.articles.forEach(noticia => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${noticia.image || ''}" alt="">
        <h3>${noticia.title}</h3>
        <p>${noticia.description || ''}</p>
        <a href="${noticia.url}" target="_blank">Ler mais</a>
      `;

      container.appendChild(card);
    });

  } catch (erro) {
    container.innerHTML = "<p>Erro ao carregar notícias.</p>";
    console.error("Erro ao buscar:", erro);
  }
}

carregarNoticias();
