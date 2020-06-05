## PTC Home Assignment
This is my interpretation of the facebook pages search
## Note
What makes this project scalable?
1. Using monorepo strategy - makes it easy to communicate between the backend and the client, having a shared repository to share some interfaces between both projects and reduce errors and duplications, build install and test both projects in one endpoint.
2. Using Typescript in both projects - makes everything Strongly typed, less prone to error and easier to work in large teams.
3. Using Prettier - Unify code styling makes everything more readable and consistent.
4. Make everything configurable - using a config.ts file to set configurations across all the backend.  

3rd Party api:  
* used a third party api called opencage-api to resolve the reverseGeocode solution. while this API works great, it is free to use under the limitation of 2500 calls per day. make sure not to pass this threshold.

What is not scalable?
* Rate limitation on the backend implemented by the Express-throttle library. This will limit the rate <b>Per Instance</b> and not at scale. In order for this feature to be scalable and work in horizontal scale we will need a to configure a storage that will persist the state of the current rate across all instances.

## Code style
For both backend and client I'm using Typescript backed by Prettier to maintain uniform coding style.
In the client side I'm using React Hooks feature.

## Tech/framework used fo client
<b>Built with</b>
- [React](https://reactjs.org/) as client framework
- [Ant Design](https://ant.design/) for UI components  

## Tech/framework used fo backend
<b>Built with</b>
- [Axios](https://github.com/axios/axios) Promise based HTTP client for the browser and node.js
- [Express](https://expressjs.com/) web framework for Node.js  
- [Express-throttle](https://github.com/GlurG/express-throttle#readme) Request throttling middleware for Express framework
- [helmet](https://helmetjs.github.io/) minimal security for express
- [opencage-api-client](https://opencagedata.com/api) 3rd party api for reverse geocode (converting long and lat to location string)
- [yarn](https://yarnpkg.com/) package manager and monorepo handler

## Features
I've decided to go with the monorepo strategy for easier handling of both client and backend from a single point of entrance and better dependencies handling

## Installation
First you need to make sure your .env file contains both TOKENS for FB and Open Cage.  
go to packages\backend\.env and insert the correct access tokens to this file.  
OCD_API_KEY=ADD YOUR KEY  
FB_ACCESS_TOKEN=ADD YOUR KEY

Second you need to go into the root folder of this repo and install the dependencies of both client and backend.  
use:  
``yarn install``  
This will cover the dependencies of both projects at once.
Important note - you must [install yarn](https://classic.yarnpkg.com/en/docs/install), this will not work with other package managers like npm.

## Tests
use:  
``yarn test``

## How to use?
Tried to make everything configurable as possible, edit the following config file if you desire
``packages\backend\src\config.ts``  
To run both backend and client, use the following command from the root directory:
``yarn start``

## License
A short snippet describing the license (MIT, Apache etc)
MIT © [Eliya Bar On]()