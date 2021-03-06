const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
 const records = zipdb.byZip[req.params.zipcode];
 if(records===undefined){
  res.status(404).send("Zipcode not found, must be 5 digits.");
 } else{
  res.json(records);
 }
});


app.get('/city/:cityname', (req, res) => {
 const records = zipdb.byCity[req.params.cityname];
 if(records===undefined){
  res.status(404).send("City not found. Must be in all capital letters.");
 } else{ 
  res.json(records);
 }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
