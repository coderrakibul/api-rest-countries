const loadCountries = () => {
    fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {
    const allCountry = document.getElementById("all-country")
    for (const country of countries) {
        console.log(country)
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card h-100 p-2 shadow fs-6">
                <div class="d-flex">
                <img src="${country.flags.png}" class="card-img-top w-25 me-2">
                <h3>${country.name}</h3>
                </div>

                <div class="card-body">
                  <span class="d-block"> Official Name: ${country.name} </span>
                  <span class="d-block"> Capital: ${country.capital} </span>
                  <span class="d-block"> Language: ${country.languages[0].name} </span>
                  <span class="d-block"> Time Zone: ${country.timezones} </span>
                  <button id="map-button" class="btn btn-primary mt-2 py-0 px-2"> View Map </button>
                </div>
            </div>
    `;
        allCountry.appendChild(div);
    }
}

