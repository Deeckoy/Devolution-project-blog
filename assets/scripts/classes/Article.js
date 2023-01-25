export class Article {
  constructor(id, title, body, user) {
    this.id = id;
    this.title = title.charAt(0).toUpperCase() + title.slice(1); // Capitalize first letter of the string
    this.body = body.charAt(0).toUpperCase() + title.slice(1);
    this.author = user;
  }

  createArticle() {
    const article = document.createElement('a');
    article.classList.add('article');
    article.href = "/post.html?postId=" + this.id;

    const title = document.createElement('h2');
    title.classList.add('article__title');

    const body = document.createElement('p');
    body.classList.add('article__body');

    const author = document.createElement('a');
    author.classList.add('article__author');
    author.href = "/users.html?userId=" + this.author.id;

    title.textContent = this.title;
    body.textContent = this.body;
    author.textContent = this.author.name;

    article.appendChild(title);
    article.appendChild(body);
    article.appendChild(author);

    return article;
  }

  appendArticle() {
    const article = this.createArticle();
    const articles = document.querySelector('.articles');

    articles.appendChild(article);
  }
}
