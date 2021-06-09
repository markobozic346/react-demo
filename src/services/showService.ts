// import {apiBaseUrl} from 'shared/constants'
import Show from 'models/Show';
class ShowsServices {
	async fetchData() {
		//data fetching

		// const apiEndpoint = `${apiBaseUrl}/shows` => throws an error
		const response = await fetch('https://api.tvmaze.com/shows');
		// console.log(response)
		const showsData = await response.json().catch((err) => {
			console.log(err);
		});

		//data formatting
		const myShows = showsData.slice(0, 50).map((showObj) => new Show(showObj));

		return myShows;
	}
}

export const showsService = new ShowsServices();
