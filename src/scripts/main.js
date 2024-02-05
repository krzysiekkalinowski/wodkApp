const addButton = document.querySelector('.add-button');
const removeButton = document.querySelector('.remove-button');
const imgCounter = document.querySelector('.img-counter');
const vodkaCounter = document.querySelector('.vodka-counter');
const caloriesCounter = document.querySelector('.calories-counter');

const updateCounter = () => {
    imgCounter.innerHTML = localStorage.length;
    vodkaCounter.innerHTML = localStorage.length;
    caloriesCounter.innerHTML = (localStorage.length * 231);
}

addButton.addEventListener('click', () => {
    const glassNumber = localStorage.length;
    localStorage.setItem(`Glass nr ${glassNumber + 1}`, `${(glassNumber + 1)}`);
    updateCounter();
})

removeButton.addEventListener('click', () => {
    const glassNumber = localStorage.length;
    localStorage.removeItem(`Glass nr ${glassNumber}`);
    updateCounter();
});

updateCounter();