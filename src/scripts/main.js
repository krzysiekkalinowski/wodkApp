const addButton = document.querySelector('.add-button');
const removeButton = document.querySelector('.remove-button');
const imgCounter = document.querySelector('.img-counter');
const vodkaCounter = document.querySelector('.vodka-counter');
const caloriesCounter = document.querySelector('.calories-counter');

let glasses = 0;
let calories = (glasses * 116);

const updateCounter = (value) => {
    imgCounter.innerHTML = value;
    vodkaCounter.innerHTML = value;
    caloriesCounter.innerHTML = calories;
}


updateCounter(glasses);

addButton.addEventListener('click', () => {
    glasses = glasses + 1;
    updateCounter(glasses);
})

removeButton.addEventListener('click', () => {
    if (glasses >=1) {
        glasses = glasses - 1;
        updateCounter(glasses);
    };
});