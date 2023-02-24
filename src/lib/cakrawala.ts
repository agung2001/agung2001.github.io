import { API_URL } from '$env/static/private'

export default {

	/** Get Directory Tree */
	directory(vault: string){
		return fetch(API_URL + '/directory/' + vault)
			.then(response => response.json())
			.then(data => data)
	}

}
