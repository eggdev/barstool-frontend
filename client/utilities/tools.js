import 'whatwg-fetch';

import Leagues from 'Utilities/leagues.js';

const gatherData = (leagueName) => {
    const apiUrl = Leagues[leagueName];
    return fetch(apiUrl)
        .then((res) => {
            if(!res.ok) {

            }
            return res;
        }).then((res) => {
            return res.json();
        })
        .catch(() => {
            // Error Logic
        })
}


export { 
    gatherData,
}