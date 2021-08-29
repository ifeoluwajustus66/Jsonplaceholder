var api = 'https://jsonplaceholder.typicode.com/photos';
var container = document.querySelector('.container');
fetch(api)
  .then(response => response.json())
  .then(json => {
    container.innerHTML = json.map(x => 
     `<div> 
        <img src="${x.url}" />
        <h1>${x.title}</h1>
      </div>`
    ).join('');
  }),5000
