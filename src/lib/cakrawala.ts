import { API_URL } from '$env/static/private'

export default {

	/** Get Data */
	async data(params: any){
		let vault = await this.vault(params.vault);
		return {
			content: (params.path) ? await this.render(params.vault, params.path) : (vault.readme) ? await this.render(params.vault, vault.readme) : '',
			filename: (params.path) ? params.path.replace(/^.*[\\\/]/, '') : (vault.readme) ? vault.readme : '',
			directory: await this.directory(params.vault),
			environment: await this.environment(),
			vault
		}
	},

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

	/** Render */
	render(vault: string, path: string){
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
