import 'whatwg-fetch';

export default () => (
  fetch('/items.json')
    .then(data => (
      data.json()
    ))
);
