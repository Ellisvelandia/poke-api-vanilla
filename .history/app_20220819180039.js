fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const mainScreen = document.querySelector(".main-screen");
    const pokeName = document.querySelector(".poke-name");
    const pokeId = document.querySelector(".poke-Id");
    const pokeFrontImage = document.querySelector(".poke-front-image");
    const pokeBackImage = document.querySelector(".poke-back-image");
    const pokeTypeOne = document.querySelector(".poke-type-one");
    const pokeTypeTwo = document.querySelector(".poke-type-two");
    const pokeWeight = document.querySelector(".poke-weight");
    const pokeHeight = document.querySelector(".poke-height");

    mainScreen.classList.remove("hide");
    pokeName.textContent.data("name");
    pokeId.textContent = data["id"];
    pokeWeight.textContent = data["weight"];
    pokeHeight.textContent = data["height"];

    const dataTypes = data["types"];
    const dataFirstType = dataTypes[0];
    const dataSecondType = dataTypes[1];
    pokeTypeOne.textContent = dataTypes[0]["type"]["name"];
    if (dataSecondType) {
      pokeTypeOne.classList.add("hide");
      pokeTypeTwo.textContent = dataSecondType['type'];
    } else {
      pokeTypeTwo.classList.add("hide");
      pokeTypeTwo.textContent = "";
    }
  });
