const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species){
    const pet = {
        name:name,
        species:species,
        isTired:5,
        sleep:function(){
            console.log(`${this.name} needs a nap. Zzzz...`);
            this.isTired = 1;
        },
        play:function(){
            if (this.isTired === 10){
                console.log("Too tired to play");
                this.sleep();
            } else{
                console.log(`Yay! ${name} loves to play!`);
                this.isTired += 1;
            }
        },
    };
    return pet;

};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter","hamster");
const cleo = createPet("Cleo","rat");
const francine = createPet("Francine","turtle");

// console.log (sora, clover,cleo, baxter,francine);

// clover.sleep();
// baxter.play();

// console.log(clover);
// console.log(baxter);

clover.isTired = 8;
francine.isTired = 9;

let allPets = [sora, clover, baxter, cleo, francine];
// console.log (allPets);

const showPets = function(petArray){
    pets.innerHTML = "";

    for (let pet of petArray){
        let status = "ready to play!";
        if (pet.isTired >= 7){
            status = "sleeping.";
        }
        const li = document.createElement("li");
        li.innerHTML = `<span class="pet-name">${pet.name} </span> the ${pet.species} is ${status}`;
        pets.append(li);
    }
};

statusButton.addEventListener("click", 
function(){
    showPets(allPets);
}
);