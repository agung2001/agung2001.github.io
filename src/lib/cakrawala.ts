import { API_URL } from '$env/static/private'

export default {

	/** Get Directory Tree */
	directory(vault: string){
		return fetch(API_URL + '/directory/' + vault)
			.then(response => response.json())
			.then(data => data)
	},

	/** Get Environment Variables */
	environment(){
		return {
			API_URL
		}
	},

	/** README */
	readme(vault: string, path: string){
		return fetch(API_URL + '/cakrawala/' + vault + '?path=' + path)
			.then(response => response.text())
	},

	/** Get Vault Configuration */
	vault(vault: string){
		return fetch(API_URL + '/vault/' + vault)
			.then(response => response.json())
			.then(data => data)
	}

}
