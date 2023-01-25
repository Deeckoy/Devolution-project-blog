export class Comment {
  constructor(id, name, email, body) {
    this.id = id;
    this.name = name.charAt(0).toUpperCase() + name.slice(1);;
    this.email = email;
    this.body = body.charAt(0).toUpperCase() + body.slice(1);;
  }

  createComment() {
    const comment = document.createElement('div');
    comment.classList.add('comment');

    const name = document.createElement('p');
    name.classList.add('comment__name');

    const email = document.createElement('p');
    email.classList.add('comment__email');

    const body = document.createElement('p');
    body.classList.add('comment__body');

    name.textContent = this.name;
    email.textContent = this.email;
    body.textContent = this.body;

    comment.appendChild(name);
    comment.appendChild(email);
    comment.appendChild(body);

    return comment;
  }

  appendComment() {
    const comment = this.createComment();
    const comments = document.querySelector('.comments');

    comments.appendChild(comment);
  }
}
