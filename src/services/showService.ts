// import {apiBaseUrl} from 'shared/constants'
import Show from 'models/Show';
import Actor from 'models/Actor'
class ShowsServices {
	async fetchShows() {
		// const apiEndpoint = `${apiBaseUrl}/shows` WP: throws error
		const response = await fetch('https://api.tvmaze.com/shows');
		const showsData = await response.json().catch((err) => {
			console.log(err);
		});
		
		const shows = showsData.slice(0, 50).map((showObj) => new Show(showObj));

		return shows;
	}
	async fetchSingleShow(id) {
		const response = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`);
		const showData = await response.json().catch((err) => {
			console.log(err);
		});
		const actorList = showData._embedded.cast.map(({person, character}) => {return new Actor(person, character)})
		const show = new Show(showData)
		show.casts = actorList;
		return show;
	}
}

export const showsService = new ShowsServices();
