import { fetchRegisterError, fetchRegisterPending } from '../actions/actions';

// I CANNOT USE HOOKS IN CLASS COMPONENT!
import { useDispatch } from 'react-redux';

class BrregAPI {
    url = 'https://data.brreg.no/enhetsregisteret/api/enheter';
    corsUrl = 'https://cors-anywhere.herokuapp.com/';

    getRegister = (query) => {
        const queryWithoutFormatting = query.replace(/[^0-9.]/g, '');
        const getIpQuery = () => {
            let queryUrl = '';
            if (Number(queryWithoutFormatting)) {
                queryUrl = `${this.url}/${queryWithoutFormatting}`;
            } else {
                queryUrl = `${this.url}?navn=${query}`;
            }
            return queryUrl;
        };

        return fetch(getIpQuery())
            .then(this.handleErrors)
            .then((resp) => {
                return resp.json();
            });
    };

    handleErrors(resp) {
        if (!resp.ok) {
        }
        return resp;
    }
}

export default BrregAPI;

// if (items) {
//       if (items._embedded && items._embedded.enheter) {
//         return items._embedded.enheter.map(makeItem);
//       }

export const getIP = () => (dispatch, getState) => {
    return fetch(url)
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            }
            throw new Error('Err!');
        })
        .then((resp) => dispatch(setIP(resp.ip)))
        .catch((err) => dispatch(addError(err)));
};
