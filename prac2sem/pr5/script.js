"use strict";

document.getElementById("loadPokemon").addEventListener("click", async function () {
    const pokemonNameOrId = prompt("Enter Pokémon name or ID:");
    if (!pokemonNameOrId) return;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId.toLowerCase()}`);
        if (!response.ok) {
            throw new Error(`Pokémon not found! (HTTP ${response.status})`);
        }
        const data = await response.json();

        document.getElementById("pokemonOutput").textContent = JSON.stringify(
            {
                name: data.name,
                id: data.id,
                height: data.height,
                weight: data.weight,
                types: data.types.map(t => t.type.name)
            },
            null,
            2
        );
    } catch (error) {
        document.getElementById("pokemonOutput").textContent = `Error: ${error.message}`;
    }
});

// Fetch API example with async/await
document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
});
