import { Article } from './classes/Article.js';
import { Comment } from './classes/Comment.js';
import { clearArticlesSkeletons, clearCommentsSkeletons } from './helpers/skeleton.js'

const currentURL = new URL(window.location.href);
const searchParams = new URLSearchParams(currentURL.search);
const postID = searchParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${ postID }`).then(response => {
  return response.json();
}).then(article => {
  fetch(`https://jsonplaceholder.typicode.com/users/${ article.userId }`).then(response => {
    return response.json();
  }).then(user => {
    new Article(article.id, article.title, article.body, user).appendArticle();
  });
  clearArticlesSkeletons();
});

fetch(`https://jsonplaceholder.typicode.com/posts/${ postID }/comments`).then(response => {
  return response.json();
}).then(data => {
  data.forEach(comment => {
    new Comment(comment.id, comment.name, comment.email, comment.body).appendComment()
  });
  clearCommentsSkeletons();
});
