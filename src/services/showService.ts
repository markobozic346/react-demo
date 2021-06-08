import {apiBaseUrl} from 'shared/constants'
import Show from 'models/Model'
class ShowsServices {
    async fetchData() {

        //data fetching
        const apiEndpoint = `${apiBaseUrl}/shows`;
        const response = await fetch(apiEndpoint);
        const showsData =  await response.json();

        //data formating
        const myShows = showsData.slice(0,50).map((showObj: any) => new Show(showObj))

        return myShows 


    }



}

export const showsService = new ShowsServices()