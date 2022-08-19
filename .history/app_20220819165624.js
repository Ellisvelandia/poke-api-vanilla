const pokeName = document.querySelector()

fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(res => res.json())
.then(data => {
  console.log(data);
})
