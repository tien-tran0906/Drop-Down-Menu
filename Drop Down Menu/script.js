//Line 2-29 will load the countries from the api link into the list items
let countries = [];
const countryListElement = document.querySelector("#country-list"); //apply the list of countries api to be the list
const countryInputElement = document.querySelector("#country-input"); //apply the list of countries api to be the list

function fetchCities() {
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        countries = data.map((x) => x.name.common); //So that it only shows the names of the countries
        countries.sort(); //Sort orders of countries from a-z

        loadData(countries, countryListElement)
    });
}

function loadData(data, element) {
    if (data) {
        element.innerHTML = "";
        let innerElement = "";
        data.forEach((item) => {
            innerElement += `
            <li>${item}</li>`;
        });

        element.innerHTML = innerElement;
    }
}

function filterData(data, searchText) {
    return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase())); //convert everything to lower case

}

fetchCities(); //call the function to make it appear

//Create an event listener when the user input st into the input box
countryInputElement.addEventListener("input", function() {
    const filteredData = filterData(countries, countryInputElement.value) //pass this into the loadData function
    loadData(filteredData, countryListElement);

});