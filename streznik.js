var express = require('express'), path = require('path'), fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/public'));


/**
 * TODO: Potrebna je implementacija tega dela funkcionalnosti (PU Zunanja avtentikacija)
 */
app.get('/api/prijava', function(req, res) {
	// ...
	res.send({status: "status", napaka: "Opis napake"});
	// ...
});


/**
 * TODO: Potrebna je implementacija tega dela funkcionalnosti (PU Prijava uporabnika v sistem)
 */
app.get('/prijava', function(req, res) {
	// ...
	res.send("<html><title>Naslov strani</title><body><p>Uporabnik <b>Krneki</b> nima pravice prijave v sistem!</p></body></html>");
	// ...
});


var port = process.env.PORT || 3030;
app.listen(port);
console.log('Streznik tece na ' + port + ' ...');


var podatkiSpomin = ["admin/nimda", "gost/gost"];


/**
 * TODO: Potrebna je implementacija tega dela funkcionalnosti (branje datoteka na strani strežnika)
 */
var podatkiDatotekaStreznik = {};


/**
 * TODO: Potrebna je implementacija tega dela funkcionalnosti
 */
function preveriSpomin(uporabniskoIme, geslo) {
	// ...
	return false;
	// ...
}


/**
 * TODO: Potrebna je implementacija tega dela funkcionalnosti
 */
function preveriDatotekaStreznik(uporabniskoIme, geslo) {
	// ...
	return false;
	// ...
}