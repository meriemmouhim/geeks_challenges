const container = document.querySelector(".info-container");
const button = document.querySelector(".btn");
const loading = `<div class="loading"><i class="fas fa-spinner fa-spin"></i> Loading character...</div>`;
const displaycharacter = async () => {
    container.innerHTML = loading;
    const randomId = Math.floor(Math.random() * 83) + 1;
    try{
        const response =await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        if(!response.ok) throw new Error("Error fetching data");
        const data = await response.json();
        const character = data.result.properties;
        const homeworldResponse = await fetch(character.homeworld);
        const homeworldData = await homeworldResponse.json();
        const homeworld = homeworldData.result.properties.name;
        container.innerHTML = `
            <h3>${character.name}</h3>
            <p>height: ${character.height}</p>
            <p>gender: ${character.gender}</p>
            <p>birth year: ${character.birth_year}</p>
            <p>homeworl: ${homeworld}</p>
        `;
    } catch (error) {
        container.innerHTML = `<p style= "color : red;">There was a problem while loading the character</p>`;
        console.error(error);
    }
}
button.addEventListener("click", displaycharacter);
