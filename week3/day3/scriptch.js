const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturn", color: "yellow", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];
const planetSection = document.querySelector(".listPlanets");
planets.forEach((planet, index) => {
    const planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.style.left = `${index * 120 + 20}px`;
    planetDiv.style.display = "inline-block";
    planetDiv.style.margin = "20px";
    const planetName = document.createElement("span");
    planetName.textContent = planet.name;
    planetName.style.color = "white";
    planetName.style.position = "absolute";
    planetName.style.bottom = "-30px";
    planetName.style.left = "0";
    planetName.style.right = "0";
    planetDiv.appendChild(planetName);
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.className = "moon";
        const angle = (i * (360 / planet.moons)) * (Math.PI / 180);
        const distance = 60;
        moonDiv.style.left = `${50 + Math.cos(angle) * distance - 15}px`;
        moonDiv.style.top = `${50 + Math.sin(angle) * distance - 15}px`;
        planetDiv.appendChild(moonDiv);
    }
    planetSection.appendChild(planetDiv);
});