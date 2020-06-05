import {RequestHandler} from 'express';
import {fetchPlaces} from '../api/places';
import axios from 'axios';
import {reverseGeocode} from '../services/reverse-geocode';

export const placesController: Record<string,RequestHandler> = {
    fetchPlaces: async (req, res, next) => {
        const query = req.query.q;
        if (typeof query === 'string') {
            try {
                const data = await fetchPlaces(query);
                const returnPlaces = await axios.all(data.places.map(async place => {
                    const countryCityObj = await reverseGeocode(place.location.latitude, place.location.longitude)
                    return {...place, ...countryCityObj}
                }))
                res.send(returnPlaces)
            } catch(e){
                next(e.message)
            }
        } else {
            next(`invalid query param`)
        }
    }
}