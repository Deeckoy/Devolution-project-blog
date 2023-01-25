export class User {
  constructor(id, username, name, email, phone, website) {
    this.id = id;
    this.name = name;
    this.username = "@" + username;
    this.email = email;
    this.phone = phone;
    this.website = website;
  }

  createUser() {
    const user = document.createElement('div');
    user.classList.add('user');

    const username = document.createElement('p');
    username.classList.add('user__username');

    const name = document.createElement('p');
    name.classList.add('user__name');

    const email = document.createElement('p');
    email.classList.add('user__email');

    const phone = document.createElement('p');
    phone.classList.add('user__phone');

    const website = document.createElement('a');
    website.classList.add('user__website');
    website.href = this.website;

    name.textContent = this.name;
    username.textContent = this.username;
    email.textContent = this.email;
    phone.textContent = this.phone;
    website.textContent = this.website;

    user.appendChild(name);
    user.appendChild(username);
    user.appendChild(email);
    user.appendChild(phone);
    user.appendChild(website);

    return user;
  }

  appendUser() {
    const user = this.createUser();
    const users = document.querySelector('.users');

    users.appendChild(user);
  }
}
