
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

exports.adam = function(req,res) {
	res.render('adam', {title: 'adam'});
}

exports.kelsa_trom = function(req,res) {
	res.render('kelsa_trom', {title: 'kelsa_trom'});
}

exports.sophia_lefraga = function(req,res) {
	res.render('sophia_lefraga', {title: 'sophia_lefraga'});
}

exports.andy_scott = function(req,res) {
	res.render('andy_scott', {title: 'andy_scott'});
}

exports.travis_korte = function(req,res) {
	res.render('travis_korte', {title: 'travis_korte'});
}
exports.anita_pan = function(req,res) {
	res.render('anita_pan', {title: 'anita_pan'});
}

exports.marina_zurkow = function(req,res) {
	res.render('marina_zurkow', {title: 'marina_zurkow'});
}

exports.recipies = function(req,res) {
	res.render('recipies', {title: 'recipies'});
}


