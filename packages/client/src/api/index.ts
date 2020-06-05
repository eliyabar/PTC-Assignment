import axios from 'axios'
import {Place} from 'shared/src/api/interfaces/places';

const placesUrl = 'http://localhost:3001/api/places'

export const fetchPlaces = async (value: string):Promise<Place[]> => {
    if(value.trim() !== '') {
        const {data} = await axios.get<Place[]>(`${placesUrl}?q=${value}`);
        return data
    }
    return []
}