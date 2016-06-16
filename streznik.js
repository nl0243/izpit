var express = require('express'), path = require('path'), fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/public'));

var podatkiSpomin = ["admin/nimda", "gost/gost"];


/**
 * TODO: Potrebna je implementacija tega dela funkcionalnosti (PU Zunanja avtentikacija)
 */
app.get('/api/prijava', function(req, res) {
	
	var geslo = req.query.geslo
	var uporabniskoIme = req.query.uporabnik;
	
		if(uporabniskoIme == null || uporabniskoIme.length == 0 || geslo == null || geslo.length == 0){
			res.send({status: false, napaka: "Napačna zahteva"});
			
		}
		else if(!(preveriSpomin(uporabniskoIme, geslo) || preveriDatotekaStreznik(uporabniskoIme, geslo))){
			res.send({status: false, napaka: "Avtentikacija ni uspela."});
			
		}else{
			res.send({status: true, napaka: ""});
		}
});


/**
 * TODO: Potrebna je implementacija tega dela funkcionalnosti (PU Prijava uporabnika v sistem)
 */
app.get('/prijava', function(req, res) {
	
	var geslo = req.query.geslo
	var uporabniskoIme = req.query.uporabnik;
	
	if(preveriSpomin(uporabniskoIme, geslo) || preveriDatotekaStreznik(uporabniskoIme, geslo)){
		res.send("<html><title>Uspešna</title><body><p>Uporabnik <b>uporabniskoIme</b> uspešno prijavljen v sistem!</p></body></html>");
		
	}else{
		res.send("<html><title>Napaka</title><body><p>Uporabnik <b>uporabniskoIme</b> nima pravice prijave v sistem!</p></body></html>");		
		
	}
});


var port = process.env.PORT || 3030;
app.listen(port);
console.log('Streznik tece na ' + port + ' ...');


var podatkiSpomin = ["admin/nimda", "gost/gost"];


/**
 * TODO: Potrebna je implementacija tega dela funkcionalnosti (branje datoteka na strani strežnika)
 */
var podatkiDatotekaStreznik = JSON.parse(fs.readFileSync(__dirname + "/public/podatki/" + "uporabniki_streznik.json").toString());


/**
 * TODO: Potrebna je implementacija tega dela funkcionalnosti
 */
function preveriSpomin(uporabniskoIme, geslo) {
	for(i in podatkiSpomin){
			username = podatkiSpomin[i].split("/")[0];
			password = podatkiSpomin[i].split("/")[1];
			if(username == uporabniskoIme && password == geslo){
				return true;
			}
	}
	return false;
}


/**
 * TODO: Potrebna je implementacija tega dela funkcionalnosti
 */
function preveriDatotekaStreznik(uporabniskoIme, geslo) {
	for(i in podatkiDatotekaStreznik){
		username = podatkiDatotekaStreznik[i]["u"];
		password = podatkiDatotekaStreznik[i]["p"];
		if(username == uporabniskoIme && password == geslo){
			return true;
		}
	}
	return false;
}