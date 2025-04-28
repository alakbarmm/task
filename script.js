
const cars = [
    { brand: "BMW", model: "M5", year: 2023, image: "https://images.dealer.com/ddc/vehicles/2025/BMW/M5/Sedan/still/front-left/front-left-640-en_US.jpg" },
    { brand: "Audi", model: "A8", year: 2022, image: "https://m.atcdn.co.uk/vms/media/5693b27f1bee4e818549b3dc9de54938.jpg" },
    { brand: "Mercedes", model: "E-Class", year: 2023, image: "https://m.atcdn.co.uk/vms/media/9ded232b3e124788b970ef38a81770b0.jpg" },
    { brand: "Bentley", model: "Continental", year: 2021, image: "https://images.dealer.com/ddc/vehicles/2025/Bentley/Continental%20GT/Coupe/color/Alpine%20Green%20Satin%20by%20Mulliner-AGS-140,163,128-320-en_US.jpg" }
];


function displayCars(carData = cars) {
    let carList = document.getElementById("carList");
    carList.innerHTML = ""; 

    carData.forEach(car => {
        let carItem = document.createElement("div");
        carItem.classList.add("car");
        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.brand} ${car.model}">
            <h2>${car.brand} ${car.model}</h2>
            <p>İl: ${car.year}</p>
        `;
        carList.appendChild(carItem);
    });
}


function searchCar() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    let filteredCars = cars.filter(car => car.brand.toLowerCase().includes(searchValue) || car.model.toLowerCase().includes(searchValue));
    displayCars(filteredCars);
}


document.addEventListener("DOMContentLoaded", () => displayCars());
