import server from './server'
import {config} from './src/config';

const port = config.app.server.port
server().listen(port, () =>
    console.log(`App is listening on localhost:${port}`)
)
