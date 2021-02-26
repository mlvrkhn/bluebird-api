class BrregAPI {
    ORG = 'https://data.brreg.no/enhetsregisteret/api/enheter/920647960';
    NAVN = 'https://data.brreg.no/enhetsregisteret/api/enheter?navn=oslo';
    url = 'https://data.brreg.no/enhetsregisteret/api/enheter';
    corsUrl = 'https://cors-anywhere.herokuapp.com/';

    getRegister = (query) => {
        console.log(`${this.url}${query}`);
        return fetch(`${this.url}${query}`)
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
