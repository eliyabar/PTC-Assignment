export interface Place {
    id: string,
    name: string,
    location: {
        latitude: string,
        longitude: string
    },
    link: string,
    city?: string,
    country?: string
}