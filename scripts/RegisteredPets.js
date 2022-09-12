import { getPets } from "./database.js"

const pets = getPets()

export const RegisteredPets = () => {
    let petsHTML = "<ul>"

    for (const pet of pets) {
        petsHTML += `<li>${pet.name}</li>`;
    }

    petsHTML += "</ul>"

    return petsHTML
}



