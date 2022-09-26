let countries = [];

const countryListElem = document.getElementById("country-list"); //it select ul from html
const countryInputElem = document.getElementById("country-input");

(function fetchCountries() {
  // fetch("https://restcountries.com/v3.1/all")
  //   .then((response) => {
  //     response.json().then((data) => {
  //       countries = data.map((country) => country.name.common).sort();
  //       loadData(countries, countryListElem);
  //       console.log(countries);
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  fetch("https://restcountries.com/v3.1/all")
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data[0].name.common);
      countries = data
        .map((item) => {
          return item.name.common;
        })
        .sort();

      loadData(countries, countryListElem);
    })
    .catch((err) => console.log(err));
})();

function loadData(data, element) {
  if (data) {
    element.innerHTML = "";
    let innerElement = "";
    data.forEach((item) => {
      innerElement += `
<li class="p-[5px] text-[#48438f] font-medium w-full cursor-pointer">${item}</li>
          `;
    });
    element.innerHTML = innerElement; //it will add li to ul
  }
}

function filterData(data, searchText) {
  // console.log(data);
  return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));
}
countryInputElem.addEventListener("input", function (e) {
  // console.log(e);
  const filterCon = filterData(countries, countryInputElem.value);
  loadData(filterCon, countryListElem);
});
