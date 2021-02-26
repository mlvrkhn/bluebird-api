class BrregAPI {
    url = 'https://data.brreg.no/enhetsregisteret/api/enheter';
    ORG = 'https://data.brreg.no/enhetsregisteret/api/enheter/920647960';
    NAVN = 'https://data.brreg.no/enhetsregisteret/api/enheter?navn=oslo';
    url = 'https://data.brreg.no/enhetsregisteret/api/enheter/';
    corsUrl = 'https://cors-anywhere.herokuapp.com/';

    getRegister = (query) => {
        const cleanQuery = query.replace(/[^0-9.]/g, '');
        let queryUrl = '';

        if (Number(cleanQuery)) {
            queryUrl = `${this.url}/${cleanQuery}`;
        } else {
            queryUrl = `${this.url}?navn=${cleanQuery}`;
        }

        return fetch(queryUrl)
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

// if (items) {
//       if (items._embedded && items._embedded.enheter) {
//         return items._embedded.enheter.map(makeItem);
//       }
