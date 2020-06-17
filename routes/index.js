var express = require('express');
var router = express.Router();
const getGeocode = require("../utils/getGeocode")
const getForecast = require("../utils/getForecast")
/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    
    const {city} = req.query
   
   
    if(!city){
      return res.render('index', { title: 'Expresssssssssss' });
    }
   
  
    // else
    // get the coordinate from the city name
    const location = await getGeocode(city)
    const forecast = await getForecast(location[0].geometry.coordinates)
    
    console.log(forecast.current.weather)
    return res.render('index', {title:"weather app",forecast: forecast.current})
  } catch(err){
    next(err)
  }
  
});

module.exports = router;
