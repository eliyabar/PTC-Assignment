const openCage = require('opencage-api-client')

interface OpenCageData {
    results: { components: { city: string, country: string } }[]
}

export const reverseGeocode = async (lat: string, long: string) => {
    const res = await <OpenCageData>openCage.geocode({q: `${lat}, ${long}`, language: 'en'})
    const component = res.results[0].components
    const {city, country} = component;
    return {city, country}
}