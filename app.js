var app = require('./lib');



//  url: /vote
app.get('/vote', function(){
	res.send({status:0, msg:"vote success"});
});

//url:'/user/1', data:{ name: 'hunger' }
app.get('/user/:uid', function(req, res){
	console.log(req.params.uid); //1
	console.log(req.query.name); //hunger
	res.send({a:1,b:2});
});

//type: post, url: '/postData', data: {comment: 'hello'}
app.post('/postData', function(req, res){
	console.log(req.body.comment); //hello
	res.send({ status:0, data:[1,2,3] });
});


//打开首页  htttp://localhost:8080, 渲染 ejs
app.get('/', function(req, res){
	res.render('index',{username:'hunger'});
})




