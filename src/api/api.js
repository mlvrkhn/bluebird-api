class BrregAPI {
    fullUrl = 'https://data.brreg.no/enhetsregisteret/api/enheter/920647960';
    navnUrl = 'https://data.brreg.no/enhetsregisteret/api/enheter?navn=oslo';
    url = 'https://data.brreg.no/enhetsregisteret/api/enheter/';
    corsUrl = 'https://cors-anywhere.herokuapp.com/';

    getRegister = (query) => {
        return fetch(query)
            .then(this.handleErrors)
            .then((resp) => {
                return resp.json();
            });
    };

    handleErrors(resp) {
        if (!resp.ok) {
            throw Error(resp.statusText);
        }
        return resp;
    }
}

export default BrregAPI;

// NAVN search https://data.brreg.no/enhetsregisteret/api/enheter?navn=oslo
