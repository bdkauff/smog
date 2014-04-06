
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'index' });
};

exports.smog = function(req, res) {
  res.render('smog', { title: 'SMOG' });
}

exports.smogIssue = function(req,res) {
	res.render('smogIssue', {title: 'SMOGIssue'});
}

exports.adam_mann = function(req,res) {
	res.render('adam_mann', {title: 'SMOG'});
}

exports.seth_maxon = function(req,res) {
	res.render('seth_maxon', {title: 'SMOG'});
}

exports.kelsa_trom = function(req,res) {
	res.render('kelsa_trom', {title: 'SMOG'});

}

exports.sophia_lefraga = function(req,res) {
	res.render('sophia_lefraga', {title: 'SMOG'});
}

exports.andy_scott = function(req,res) {
	res.render('andy_scott', {title: 'SMOG'});
}

exports.travis_korte = function(req,res) {
	res.render('travis_korte', {title: 'SMOG'});
}
exports.anita_pan = function(req,res) {
	res.render('anita_pan', {title: 'SMOG'});
}

exports.marina_zurkow = function(req,res) {
	res.render('marina_zurkow', {title: 'SMOG'});
}

exports.recipies = function(req,res) {
	res.render('recipies', {title: 'SMOG'});
}
