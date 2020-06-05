import express, {NextFunction, Request, Response} from 'express'
import * as http from 'http'
import {config} from './src/config'
import pino from 'express-pino-logger'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
// Routes
import placesRouter from './src/routes/places'

dotenv.config()

const createServer = (reqLimit = '100kb') => {
    const app = express()
    app.use(helmet());
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({extended: false, limit: reqLimit}))
    // parse application/json
    app.use(bodyParser.json({limit: reqLimit}))
    app.use(cors({
        origin: config.app.client.host
    }));
    app.use('/api', placesRouter)
    // Rest logger
    app.use(pino())
    app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
        response.status(500).send(error)
    })

    const server = http.createServer(app)
    return server
}

export default createServer
