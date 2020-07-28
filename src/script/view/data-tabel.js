function dataTabel() {
    const getDataCovidCountries = () => {
        fetch(`https://disease.sh/v3/covid-19/countries`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                const dataSort = responseJson.map((country) => ({
                    names: country.country,
                    cases: country.cases,
                    death: country.deaths,
                    recover: country.recovered,
                    flag: country.countryInfo.flag,
                    toDayCases: country.todayCases,
                    toDayDeaths: country.todayDeaths,
                    toDayRecovered: country.todayRecovered,
                    active: country.active

                }));

                renderDataCovidCountries(dataSort);

            })
            .catch(error => {
                showErrorMessage();
            })
    };

    const showErrorMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    function sortData(prop) {
        return function (casesMax, casesMin) {
            if (casesMax[prop] < casesMin[prop]) {
                return 1;
            } else if (casesMax[prop] > casesMin[prop]) {
                return -1;
            }
            return 0;
        };
    }

    const renderDataCovidCountries = (dataSort) => {
        const listDataCovid = document.getElementById('tabel-cov');

        listDataCovid.innerHTML = "";

        dataSort.sort(sortData("cases"));
        var Nomor = 1;

        dataSort.forEach(data => {
            // if (Nomor < 11) {
            listDataCovid.innerHTML += `
            <tr>
                <td>${Nomor++}</td>
                <td><img src="${data.flag}" style="width:2em"> ${data.names} </td>
                <td>${data.cases}</td>
                <td>${data.active}</td>
                <td>${data.death}</td>
                <td>${data.recover}</td>
                <td>${data.toDayCases}</td>
                <td>${data.toDayDeaths}</td>
                <td>${data.toDayRecovered}</td>
            </tr>`;
            // }
        })
    }

    getDataCovidCountries();
}

export default dataTabel;