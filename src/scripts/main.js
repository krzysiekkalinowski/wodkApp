const addButton = document.querySelector('.add-button');
const removeButton = document.querySelector('.remove-button');
const imgCounter = document.querySelector('.img-counter');
const vodkaCounter = document.querySelector('.vodka-counter');
const caloriesCounter = document.querySelector('.calories-counter');

const key = new Date().toISOString().slice(0, 10);

const storedValue = localStorage.getItem(key);
if (storedValue) {
    const numbers = storedValue.match(/\d+/g).map(Number);
    glasses = numbers[0];
    lastCalories = numbers[1];
} else {
    glasses = 0;
    lastCalories = 0;
}

const updateCounter = (value) => {
    imgCounter.innerHTML = value;
    vodkaCounter.innerHTML = value;
    let calories = (value * 116);
    lastCalories = calories;
    caloriesCounter.innerHTML = calories;
};

const updateHistory = () => {
    localStorage.setItem(`${key}`, `Ilość kieliszków: ${glasses}, Ilość kalorii: ${lastCalories}`)
};

updateCounter(glasses);

addButton.addEventListener('click', () => {
    glasses = glasses + 1;
    updateCounter(glasses);
    updateHistory();
});

removeButton.addEventListener('click', () => {
    if (glasses >=1) {
        glasses = glasses - 1;
        updateCounter(glasses);
        updateHistory();
    };
});