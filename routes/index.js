
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
	res.render('articles', {title: 'adam'});
}