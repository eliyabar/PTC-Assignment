import express from 'express'
import {placesController} from '../controllers/places'
const router = express.Router();
const throttle = require("express-throttle");
import {config} from '../config'

router.route('/places')
    .get(throttle({ 'burst': config.api.search.rateLimit.maxCalls, 'period': config.api.search.rateLimit.timeWindow }), placesController.fetchPlaces)


export default router;