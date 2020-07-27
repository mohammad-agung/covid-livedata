function dataSource() {

    const getDataCovidGlobal = () => {
        fetch(`https://disease.sh/v3/covid-19/all`)
            .then(response => {
                return response.json();
            })
            .then(dataGlobal => {
                renderDataGlobal(dataGlobal);
            })
            .catch(error => {
                showErrorMessage();
            })
    };

    const showErrorMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    const renderDataGlobal = (data) => {
        const allData = document.getElementById('data-cov-global');
        const updateAllData = document.getElementById('data-cov-global-update');

        allData.innerHTML +=
            `<div class="col-lg-3 col-md-6 mb-4">
            <div class="card text-white bg-warning">
                <div class="card-body">
                    <h5 class="card-title">Confirmed</h5>
                    <p class="card-text"><strong>${data.cases.toLocaleString()}</strong>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="card text-white bg-danger">
                <div class="card-body">
                    <h5 class="card-title">Deaths</h5>
                    <p class="card-text"><strong>${data.deaths.toLocaleString()}</strong>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="card text-white bg-success">
                <div class="card-body">
                    <h5 class="card-title">Recovered</h5>
                    <p class="card-text"><strong>${data.recovered.toLocaleString()}</strong>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="card text-white bg-info">
                <div class="card-body">
                    <h5 class="card-title">ToDay Cases</h5>
                    <p class="card-text"><strong>${data.active.toLocaleString()}</strong>
                    </p>
                </div>
            </div>
        </div>`;

        let [date, month, year] = (new Date(data.updated)).toLocaleString().split("/");

        updateAllData.innerHTML +=
            `<div class="col-lg-12">
                <p class="text-center">UPDATE : ${date}/${month}/${year}</p>
            </div>`;
    }

    getDataCovidGlobal();
}

export default dataSource;