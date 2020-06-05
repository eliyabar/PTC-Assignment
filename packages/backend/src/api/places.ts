import axios from 'axios'
import {Place} from 'shared/src/api/interfaces/places';
import {config} from '../config'

export async function fetchPlaces(name: string, limit = config.api.search.maxResults): Promise<{places: Place[]}>   {
    const places: Place[] = [];
    const requestParams = {
        type: 'place',
        q: name,
        fields: 'id,name,location{latitude,longitude},link',
        limit: config.api.search.callLimit, //Max is 100 will be used as a multiplier
        access_token: config.api.accessToken
    }
    const {data: {data, paging}} = await axios.get<{ data: Place[], paging: { next: string } }>(config.api.search.url, {
        params: requestParams
    })
    places.push(...data);
    let nextUrl = paging?.next
    while (nextUrl && places.length < limit) {
        const {data: {data: nextData, paging: {next}},} = await axios.get<{ data: Place[], paging: { next: string } }>(nextUrl, {
            params: requestParams
        })
        nextUrl = next
        places.push(...nextData);
    }
    return {places}
}