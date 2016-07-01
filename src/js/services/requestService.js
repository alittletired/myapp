import qs from 'query-string';
import config from '../configs';

import {serverURL} from '../env'
let urlPrefix = serverURL;

urlPrefix='http://10.5.101.47:3000'
function filterJSON(res) {
	return res.json();
}


function filterStatus(res) {
    console.info(`·µ»Ø: `+ JSON.stringify( res));
	if (res.status >= 200 && res.status < 300) {
		return res
	}
	else {
		let error = new Error(res.statusText);
		error.res = res;
		error.type = 'http';
		throw error;
	}
}


export function get(url, params) {
    url = urlPrefix + url;
    if (params) {
        url += `?${qs.stringify(params)}`;
    }

    if (__DEV__) {
        console.info(`GET: `, url);
        console.info(`Params: `, params)
    }

    return fetch(url)
        .then(filterStatus)
        .then(filterJSON)
        .catch((err) => console.log("error")        );
}


export function post(url, body) {
	url = urlPrefix + url;

	if (__DEV__) {
		console.info(`POST: `, url);
		console.info(`Body: `, body)
	}

	return fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})
		.then(filterStatus)
        .then(filterJSON)
        .catch((err) => console.log("error"));
}


