class BrregAPI {
    url = 'https://data.brreg.no/';

    getRepos = (query) => {
        console.log(`${this.url}query`);
        return fetch(`${this.url}query`);
    };
}

export default BrregAPI;

// https://data.brreg.no/enhetsregisteret/api/enheter?navn
//
