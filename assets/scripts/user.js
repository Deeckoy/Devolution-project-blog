import { User } from './classes/User.js';

const currentURL = new URL(window.location.href);
const searchParams = new URLSearchParams(currentURL.search);
const userID = searchParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${ userID }`).then(response => {
  return response.json();
}).then(user => {
  new User(user.id, user.username, user.name, user.email, user.phone, user.website).appendUser();
});
