import dotenv from 'dotenv'
dotenv.config()
export const config = {
    api: {
        search:{
            url:'https://graph.facebook.com/search',
            callLimit: '100', //100 is FB's max limit for a single call
            rateLimit: {
                timeWindow:  '60s',
                maxCalls: 50
            },
            maxResults: 200
        },
        accessToken : process.env.FB_ACCESS_TOKEN
    },
    app: {
        client:{
            host: process.env.CLIENT_HOST || 'http://localhost:3000'
        },
        server: {
            port: process.env.PORT || 3001
        }
    }
}