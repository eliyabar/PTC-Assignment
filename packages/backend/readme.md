## PTC Home Assignment
This is my interpretation of the Facebook pages search

3rd Party API:  
* used a third party API called opencage-API to resolve the reverse geocode solution. while this API works great, it is free to use under the limitation of 2500 calls per day. make sure not to pass this threshold.

## Installation
First, you need to make sure your .env file contains both TOKENS for FB and Open Cage.  
go to packages\backend\.env and insert the correct access tokens to this file.  
OCD_API_KEY=ADD YOUR KEY  
FB_ACCESS_TOKEN=ADD YOUR KEY

## How to use?
To run both client and server use the package.json in the root folder (It's a monorepo)
Tried to make everything configurable as possible, edit the following config file if you desire
``packages\backend\src\config.ts``  
To run the backend, use the following command from the root directory:
``yarn start``
