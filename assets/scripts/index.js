import { Article } from './classes/Article.js';
import { clearArticlesSkeletons } from './helpers/skeleton.js'

fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
  return response.json();
}).then(data => {
  data.forEach(article => {
    fetch(`https://jsonplaceholder.typicode.com/users/${ article.userId }`).then(response => {
      return response.json();
    }).then(user => {
      new Article(article.id, article.title, article.body, user).appendArticle();
      clearArticlesSkeletons();
    });
  });
});
