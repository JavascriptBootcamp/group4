
const request = require('request');
const http = require('http');
const rp = require('request-promise');
const url = require('url');

const resp = rp('http://localhost:5000?actorName=israel').then( response => {

console.log(response);
});