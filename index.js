//Initializing our variable that gets the info from url json
const charAPI = 'http://localhost:3000/characters';

//Declaring our variables from html
const content = document.getElementById('content');
const moreInfo = document.getElementById('moreInfo');
const animalName = document.getElementById('animalName');
const image = document.getElementById('image');
const animalVotes = document.getElementById('animalVotes');
const votesForm = document.getElementById('votesForm');
const id = document.getElementById('id');

//Votes counting
let currentAnimal;

votesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  currentAnimal.votes += parseInt(e.target.votes.value);
  showInfo(currentAnimal);
});


//Fetching info from the url initialized in line 1
fetch(charAPI)
    .then((res) => res.json())
    .then(showAnimals);

function showAnimals(animals){
    animals.forEach(showAnimal);
}

function showAnimal(animal){
    const animalSpan = document.createElement('div');
    animalSpan.classList.add('content');
    animalSpan.innerHTML =`
            <h4 class="name">${animal.name}</h4>

            <div class="actions">
                    <button class="moreInfo">More Info...</button>
            </div>
       
    `; //from line 33 to 42, I have created a div where the animal name is displayed as shown from line 35 to 42


    //Here, I have added an event listener to the buttons shown as "More Info ..."
    animalSpan.addEventListener("click", () => {
        currentAnimal = animal;
        showInfo(animal);

        
    });
    
    //Adding the list to the DOM
    document.querySelector('#list').appendChild(animalSpan);
    
}

//When any of the button is clicked, it fetches the corresponding info here
function showInfo(animal) {
    animalName.innerText = animal.name;
    image.src = animal.image;
    animalVotes.innerText = animal.votes;
    id.innerText = animal.id;

    votes.value = ""; //resetting the content on the form instead of sticking with the number input by the user
}

function el(id) {
    return document.getElementById(id);
}


//resetting the votes when the user clicks the reset button
reset.addEventListener("click", () => {
    animalVotes.innerText = 0;
    currentAnimal.votes = 0;
});


