/* let apiUrl = 'https://facebook.github.io/react-native/movies.json'; */
let apiUrl = 'https://jsonplaceholder.typicode.com/photos';

export const get_albums = () =>
  fetch(apiUrl)
    .then(res => res.json())
    .catch(err => console.log(err));
