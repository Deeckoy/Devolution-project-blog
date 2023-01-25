const skeletonComment = `
<div class="comment skeleton">
  <p class="comment__name"></p>
  <p class="comment__email"></p>
  <p class="comment__body"></p>
</div>`

export function clearCommentsSkeletons() {
  const skeletons = document.querySelectorAll('.comment.skeleton');

  console.log(skeletons);

  skeletons.forEach(skeleton => {
    skeleton.remove();
  });
}

const skeletonArticle = `
<div class="article skeleton">
  <p class="article__title"></p>
  <p class="article__body"></p>
  <p class="article__author"></p>
</div>`

export function clearArticlesSkeletons() {
  const skeletons = document.querySelectorAll('.article.skeleton');

  skeletons.forEach(skeleton => {
    skeleton.remove();
  });
}

const sectionArticles = document.querySelector('.articles')
const sectionComments = document.querySelector('.comments')

if (sectionArticles) {
  for (let i = 0; i < 10; i++) {
    sectionArticles.innerHTML += skeletonArticle
  }
}

if (sectionComments) {
  for (let i = 0; i < 5; i++) {
    sectionComments.innerHTML += skeletonComment
  }
}
