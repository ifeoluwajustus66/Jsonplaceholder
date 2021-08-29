
var api = 'https://jsonplaceholder.typicode.com/Albums';
var app = document.querySelector('.app');
fetch(api)
  .then(response => response.json())
  .then(json => {
    app.innerHTML = json.map(x => 
     `<div> 
        <h2>${x.userId}</h2>
        <h3>${x.id}</h3>
        <h1>${x.title}</h1>
      </div>`
    ).join('');
  }),1000

