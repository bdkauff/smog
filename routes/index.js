
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