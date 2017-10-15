var express = require('express');
var router = express.Router();



router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'KRT Project' });
});

//======================Start=======================//

//textsearch.jade//
router.get('/textsearch', function(req, res, next) {
  res.render('textsearch', { title: 'KRT Project' });
});


//searchresult.jade//
router.post('/searchresult', function(req, res) {

    var db = req.db;
    var collection = db.get('tweets');

    var searchtext = req.body.txtname;

    var searchquery= {"text" : new RegExp(searchtext,"i")};
    
    collection.find(searchquery, function (err, result) {
        if (err) {
           console.log('Error in find'); 
        }
        else {
            console.log(result);
            res.render('searchresult', {
            "searchresult" : result, "searchtext" : searchtext, title:'KRT Project'});
         }
        
    });
});

//comment.jade//
router.get('/comment/:id', function(req, res) {

    var db= req.db;
    var collection = db.get('tweets');

    var commentid=parseInt(req.params.id);
    console.log("Comments updating");


    var query={"id": commentid};

    collection.find(query, function(err,result){
        if(err){
            console.log("Failed to retrieve query");
        }
        else{
	console.log(result);
        res.render('comment', {"comment" : result, title: 'KRT Project' });        
        }
    });

  
});




//commentresult.jade//
router.post('/commentresult', function(req, res) {
   
    var db = req.db;
    var collection = db.get('tweets');

    var userid = parseInt(req.body.usercommentid);
    var comments= req.body.txtcomment;
    var type=typeof(userid);
        
    console.log("Adding Comments of Users");
    console.log(comments);
    console.log(userid);
    
    var userquery= {"id": userid};
    var setquery={"$set" : {"comment" : comments}};
    console.log(userquery,setquery);
    //var queryconcat= userquery.concat(setquery);

    var addcomment=collection.update(userquery,setquery, false, false,function(){
               
  });

    console.log(addcomment+"Update Successful");
    res.render('commentresult', {title:'KRT Project'});
       
//   var query={"id": userid};

//    collection.find(query, function(err,result){
//        if(err){
//            console.log("Failed to retrieve query");
//        }
//        else{
//	console.log(result);
//        res.render('commentresult', {"commentresult" : result, title: 'KRT Project' });        
//        }
//    });
  

});
    


module.exports = router;


