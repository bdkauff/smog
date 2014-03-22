
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
	res.render('adam_mann', {title: 'adam_mann'});
}

exports.seth_maxon = function(req,res) {
	res.render('seth_maxon', {title: 'seth_maxon'});

exports.kelsa_trom = function(req,res) {
	res.render('kelsa_trom', {title: 'kelsa_trom'});

}