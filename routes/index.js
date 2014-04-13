
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'SMOG' });
};

exports.smog = function(req, res) {
  res.render('smog', { title: 'SMOG' });
}

exports.smogIssue = function(req,res) {
	res.render('smogIssue', {title: 'SMOG'});
}

exports.adam_mann = function(req,res) {
	res.render('adam_mann', {title: 'SMOG|Adam Mann'});
}

exports.seth_maxon = function(req,res) {
	res.render('seth_maxon', {title: 'SMOG|Seth Maxon'});
}

exports.kelsa_trom = function(req,res) {
	res.render('kelsa_trom', {title: 'SMOG|Kelsa Trom'});
}

exports.sophia_lefraga = function(req,res) {
	res.render('sophia_lefraga', {title: 'SMOG|Sophia Le Fraga'});
}

exports.andrea_b_scott = function(req,res) {
	res.render('andrea_b_scott', {title: 'SMOG|Andrea B. Scott'});
}

exports.travis_korte = function(req,res) {
	res.render('travis_korte', {title: 'SMOG|Travis Korte'});
}
exports.anita_pan = function(req,res) {
	res.render('anita_pan', {title: 'SMOG|Anita Pan'});
}

exports.marina_zurkow = function(req,res) {
	res.render('marina_zurkow', {title: 'SMOG|Marina Zurkow'});
}

exports.polluted_provisions = function(req,res) {
	res.render('polluted_provisions', {title: 'SMOG|Polluted Provisions'});
}

exports.jay_z = function(req,res) {
	res.render('jay_z', {title: 'SMOG|Jay Zehngebot'});
}

exports.about = function(req,res) {
	res.render('about', {title: 'SMOG|About'});
}

exports.contact = function(req,res) {
	res.render('contact', {title: 'SMOG|Contact'});
}
